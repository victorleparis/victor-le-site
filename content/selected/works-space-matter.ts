import type { SelectedProject } from "../types";

export const worksSpaceMatter: SelectedProject = {
  id: "works-space-matter",
  number: "05",
  title: "WORKS IN SPACE & MATTER",
  disciplines: ["Painting", "Sculpture", "Drawing", "Installation", "Object"],
  layout: "works-space-matter",
  toVerify: ["Dates to establish", "Titles, materials and dimensions per piece"],
};

/**
 * Curatorial hierarchy from MEDIA_STATUS.md's V3 selection. Filenames are
 * matched case-insensitively if present in public/media/works-space-matter;
 * otherwise the section falls back to positional ordering of whatever
 * files have actually landed.
 */
export const worksSpaceMatterHero = ["T7.jpg", "20230416_131040.jpg"];
export const worksSpaceMatterStrong = [
  "z A popi 1.jpg",
  "DSC00938.JPG",
  "z A58.jpg",
  "A fusain 2.jpg",
  "NG.jpg",
  "103 J.jpg",
  "SPHINXLARGE.jpg",
];
export const worksSpaceMatterSecondary = [
  "DSC01889.JPG",
  "z F43.jpg",
  "A fusain 1.jpg",
  "A5.jpg",
  "A3.jpg",
];
