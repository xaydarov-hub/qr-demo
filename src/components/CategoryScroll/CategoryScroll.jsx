import {
  LayoutGrid,
  Beef,
  Flame,
  Drumstick,
  IceCreamCone,
  CupSoda,
  Droplets,
  Cookie,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./CategoryScroll.module.css";

const ICONS = {
  LayoutGrid,
  Beef,
  Flame,
  Drumstick,
  IceCreamCone,
  CupSoda,
  Droplets,
  Cookie,
};

export default function CategoryScroll({ categories, activeId, onSelect }) {
  const { lang } = useLanguage();

  return (
    <nav className={`scroll-row ${styles.row}`} aria-label="Categories">
      {categories.map((cat) => {
        const Icon = ICONS[cat.icon] ?? LayoutGrid;
        const active = cat.id === activeId;
        return (
          <button
            key={cat.id}
            className={`${styles.pill} ${active ? styles.pillActive : ""}`}
            onClick={() => onSelect(cat.id)}
            aria-pressed={active}
          >
            <Icon size={16} strokeWidth={2} />
            <span>{cat.name[lang]}</span>
          </button>
        );
      })}
    </nav>
  );
}
