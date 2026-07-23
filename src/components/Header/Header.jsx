import { Heart, Settings2 } from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";
import styles from "./Header.module.css";

export default function Header({ onOpenFavorites, onOpenSettings }) {
  const { favoriteIds } = useFavorites();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>
            <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
              <circle cx="20" cy="20" r="18" fill="none" stroke="var(--color-gold)" strokeWidth="1.6" />
              <path d="M20 13 L24.5 20 L20 27 L15.5 20 Z" fill="var(--color-gold)" />
            </svg>
          </span>
          <span className={styles.logoText}>KOKAND</span>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.iconBtn}
            onClick={onOpenFavorites}
            aria-label="Favorites"
          >
            <Heart size={19} strokeWidth={2} />
            {favoriteIds.length > 0 && <span className={styles.badge}>{favoriteIds.length}</span>}
          </button>
          <button
            className={styles.iconBtn}
            onClick={onOpenSettings}
            aria-label="Settings"
          >
            <Settings2 size={19} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
