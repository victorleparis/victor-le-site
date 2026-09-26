import type { SelectedProject } from "../types";
import { siteConfig } from "../site.config";

export const l3xl3: SelectedProject = {
  id: "l3xl3",
  number: "01",
  title: siteConfig.lexileLabel,
  disciplines: ["Opera", "Costume", "Music", "Stage"],
  layout: "l3xl3",
  toVerify: [
    "Date / development chronology",
    "Character names, costume attributions, production status",
  ],
};
