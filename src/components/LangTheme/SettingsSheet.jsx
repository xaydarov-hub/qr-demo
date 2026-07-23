import { AnimatePresence, motion } from "framer-motion";
import { X, Moon, Sun } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { languages } from "../../i18n/translations";
import styles from "./SettingsSheet.module.css";

export default function SettingsSheet({ open, onClose }) {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.sheet}
            role="dialog"
            aria-label={t("theme")}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.handle} />
            <button className={styles.closeBtn} onClick={onClose} aria-label={t("close")}>
              <X size={16} />
            </button>

            <div className={styles.block}>
              <span className={styles.label}>{t("language")}</span>
              <div className={styles.langRow}>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    className={`${styles.langBtn} ${lang === l.code ? styles.langBtnActive : ""}`}
                    onClick={() => setLang(l.code)}
                    aria-pressed={lang === l.code}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.block}>
              <span className={styles.label}>{t("theme")}</span>
              <button className={styles.themeBtn} onClick={toggleTheme}>
                {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
                <span>{theme === "dark" ? "Dark" : "Light"}</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
