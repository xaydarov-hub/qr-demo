import styles from "./SealBadge.module.css";

// The one signature visual of the app: a wax-seal / grill-stamp mark
// that certifies a Best Seller, echoing a butcher's quality stamp.
export default function SealBadge({ label = "BURGERS KOKAND" }) {
  const pathId = "seal-arc-path";
  return (
    <div className={styles.seal} aria-hidden="true">
      <svg viewBox="0 0 100 100" className={styles.svg}>
        <defs>
          <path id={pathId} d="M 10,50 A 40,40 0 1,1 90,50" fill="none" />
        </defs>
        <circle cx="50" cy="50" r="46" className={styles.ringOuter} />
        <circle cx="50" cy="50" r="37" className={styles.ringInner} />
        <text className={styles.arcText}>
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            {label} • {label}
          </textPath>
        </text>
        <path d="M50 38 L56 50 L50 62 L44 50 Z" className={styles.flame} />
      </svg>
    </div>
  );
}
