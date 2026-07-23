import styles from "./CardSkeleton.module.css";

export function CardSkeletonRow({ count = 4 }) {
  return (
    <div className={styles.row}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export default function CardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={`skeleton ${styles.image}`} />
      <div className={`skeleton ${styles.line}`} />
      <div className={`skeleton ${styles.lineShort}`} />
    </div>
  );
}
