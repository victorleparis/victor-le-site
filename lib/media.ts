import fs from "node:fs";
import path from "node:path";
import { basePath, withBasePath } from "./base-path";

/**
 * Media availability is checked against the filesystem at build/render
 * time rather than hardcoded, because the V1 selections are being added
 * to public/media/ progressively (see MEDIA_STATUS.md). Sections should
 * automatically pick up real files the moment they land, with no code
 * change, and fall back to a sober placeholder when a corpus is still
 * empty.
 */

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;
const VIDEO_EXT = /\.(mp4|mov|m4v|webm)$/i;

export interface MediaFile {
  filename: string;
  url: string;
  isVideo: boolean;
}

function readDir(relDir: string): string[] {
  const abs = path.join(process.cwd(), "public", relDir);
  try {
    return fs
      .readdirSync(abs, { withFileTypes: true })
      .filter((d) => d.isFile() && (IMAGE_EXT.test(d.name) || VIDEO_EXT.test(d.name)))
      .filter((d) => !d.name.startsWith("."))
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

/**
 * Looks up media for a SELECTED corpus. Tries public/media/<slug> first,
 * then public/media/selected/<slug> — both are valid places the curated
 * selection may land, per the drop pattern described for this project.
 */
export function listCorpusMedia(slug: string): MediaFile[] {
  const candidates = [`media/${slug}`, `media/selected/${slug}`];
  for (const rel of candidates) {
    const files = readDir(rel);
    if (files.length > 0) {
      return files.map((filename) => ({
        filename,
        url: withBasePath(`/${rel}/${filename}`),
        isVideo: VIDEO_EXT.test(filename),
      }));
    }
  }
  return [];
}

/** Picks files matching known filenames first (curatorial hierarchy from
 * MEDIA_STATUS.md), preserving candidate order; falls back to whatever is
 * left, positionally, when named files aren't present yet. */
export function pickByName(files: MediaFile[], names: string[]): MediaFile[] {
  const byName = new Map(files.map((f) => [f.filename.toLowerCase(), f]));
  const picked: MediaFile[] = [];
  for (const name of names) {
    const hit = byName.get(name.toLowerCase());
    if (hit) picked.push(hit);
  }
  return picked;
}

export interface Dimensions {
  width: number;
  height: number;
}

function readPngDimensions(buf: Buffer): Dimensions | null {
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readJpegDimensions(buf: Buffer): Dimensions | null {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) {
      i += 1;
      continue;
    }
    const marker = buf[i + 1];
    const isSofMarker =
      marker !== undefined && marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSofMarker) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    const len = buf.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}

/** Reads a media file's real pixel dimensions directly from public/, so a
 * display box can be given the image's own aspect ratio instead of an
 * assumed one that would crop or letterbox it. PNG and JPEG only. */
export function fileDimensions(file: MediaFile): Dimensions | null {
  const rel = file.url.startsWith(basePath) ? file.url.slice(basePath.length) : file.url;
  const abs = path.join(process.cwd(), "public", rel);
  try {
    const buf = fs.readFileSync(abs);
    return readPngDimensions(buf) ?? readJpegDimensions(buf);
  } catch {
    return null;
  }
}

export function existsInPublic(relPath: string): boolean {
  const abs = path.join(process.cwd(), "public", relPath);
  try {
    return fs.statSync(abs).isFile();
  } catch {
    return false;
  }
}

export function identityAsset(relPath: string): string | null {
  return existsInPublic(`identity/${relPath}`) ? withBasePath(`/identity/${relPath}`) : null;
}

/** First real image found under public/identity/<subdir>/, if any —
 * used for identity assets (handwriting scans) that aren't tied to a
 * single fixed filename the way the Kotoros asset is. */
export function firstIdentityMedia(subdir: string): string | null {
  const files = readDir(`identity/${subdir}`);
  return files.length > 0 ? withBasePath(`/identity/${subdir}/${files[0]}`) : null;
}
