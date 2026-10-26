import styles from "./SectionHeading.module.css";

const projectNumbers: Record<string, string> = {
  "COLLECTIONS": "02",
  "THE DINNER PROJECT": "03",
  "L3XL3": "04",
  "SOUND": "05",
  "EDITIONS & PRINT": "06",
  "URL FIGHTERS": "07",
  "PRINCEVILLE": "08",
  "WORKS IN SPACE & MATTER": "09",
};

export function SectionHeading({
  number,
  title,
  years,
  disciplines,
}: {
  number: string;
  title: string;
  years?: string;
  disciplines: string[];
}) {
  return (
    <div className={styles.wrap}>
      <span className={styles.number}>{projectNumbers[title] ?? number} —</span>
      <h2 className={styles.title}>{title}</h2>
      {years && <span className={styles.years}>{years}</span>}
      <span className={styles.disciplines}>{disciplines.join(" · ")}</span>
    </div>
  );
}
