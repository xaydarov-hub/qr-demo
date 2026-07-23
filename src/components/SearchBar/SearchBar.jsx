import { Search, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange }) {
  const { t } = useLanguage();

  return (
    <div className={styles.wrap}>
      <Search size={17} className={styles.icon} />
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t("searchPlaceholder")}
        aria-label={t("searchPlaceholder")}
      />
      {value && (
        <button className={styles.clear} onClick={() => onChange("")} aria-label="Clear search">
          <X size={15} />
        </button>
      )}
    </div>
  );
}
