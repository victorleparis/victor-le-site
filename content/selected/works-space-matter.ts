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
export const worksSpaceMatterStrong = ["DSC00938.JPG", "103 J.jpg", "SPHINXLARGE.jpg"];
export const worksSpaceMatterSecondary = ["A fusain 1.jpg"];
