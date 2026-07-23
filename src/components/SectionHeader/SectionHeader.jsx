import styles from "./SectionHeader.module.css";

export default function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className={styles.row}>
      <div>
        {eyebrow && <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>}
        <h2 className={styles.title}>{title}</h2>
      </div>
      {action}
    </div>
  );
}
