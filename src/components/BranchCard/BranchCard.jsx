import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./BranchCard.module.css";

export default function BranchCard({ branch }) {
  const { lang, t } = useLanguage();

  return (
    <div className={styles.card}>
      <img src={branch.photo} alt={branch.name[lang]} className={styles.photo} loading="lazy" />
      <div className={styles.body}>
        <h3 className={styles.name}>{branch.name[lang]}</h3>
        <div className={styles.row}>
          <MapPin size={14} className={styles.icon} />
          <span>{branch.address[lang]}</span>
        </div>
        <div className={styles.row}>
          <Phone size={14} className={styles.icon} />
          <a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a>
        </div>
        <div className={styles.row}>
          <Clock size={14} className={styles.icon} />
          <span>{branch.hours}</span>
        </div>
        <a href={branch.mapUrl} target="_blank" rel="noreferrer" className={styles.mapLink}>
          {t("openOnMap")}
        </a>
      </div>
    </div>
  );
}
