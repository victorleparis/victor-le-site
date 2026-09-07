import styles from "./SectionHeading.module.css";

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
      <span className={styles.number}>{number} —</span>
      <h2 className={styles.title}>{title}</h2>
      {years && <span className={styles.years}>{years}</span>}
      <span className={styles.disciplines}>{disciplines.join(" · ")}</span>
    </div>
  );
}
