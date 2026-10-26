import styles from "./SectionHeading.module.css";

const projectNumbers: Record<string, string> = {
  "LIFE FRAGMENTS": "02",
  "COLLECTIONS": "03",
  "THE DINNER PROJECT": "04",
  "L3XL3": "05",
  "SOUND": "06",
  "EDITIONS & PRINT": "07",
  "URL FIGHTERS": "08",
  "PRINCEVILLE": "09",
  "WORKS IN SPACE & MATTER": "10",
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
