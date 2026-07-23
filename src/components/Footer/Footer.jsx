import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { restaurant } from "../../data/branches";
import { InstagramIcon, TelegramIcon } from "./BrandIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  const { lang, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <h2 className={styles.brandName}>BURGERS KOKAND</h2>
          <p className={styles.tagline}>{restaurant.tagline[lang]}</p>
        </div>

        <ul className={styles.infoList}>
          <li>
            <MapPin size={14} />
            <span>{restaurant.address[lang]}</span>
          </li>
          <li>
            <Phone size={14} />
            <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`}>{restaurant.phone}</a>
          </li>
          <li>
            <Clock size={14} />
            <span>
              {t("workingHours")}: {restaurant.hours}
            </span>
          </li>
        </ul>

        <div className={styles.social}>
          <a href={restaurant.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialBtn}>
            <InstagramIcon size={16} />
          </a>
          <a href={restaurant.telegram} target="_blank" rel="noreferrer" aria-label="Telegram" className={styles.socialBtn}>
            <TelegramIcon size={16} />
          </a>
        </div>

        <div className={styles.bottomRow}>
          <span>© {year} {restaurant.name} — {t("footerRights")}</span>
          <span className={styles.version}>v{restaurant.version}</span>
        </div>
      </div>
    </footer>
  );
}
