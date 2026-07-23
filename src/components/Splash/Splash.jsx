import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";
import styles from "./Splash.module.css";

export default function Splash() {
  const { lang } = useLanguage();

  return (
    <motion.div
      className={styles.splash}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
    >
      <motion.div
        className={styles.mark}
        initial={{ scale: 0.7, opacity: 0, rotate: -6 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <svg viewBox="0 0 100 100" className={styles.logoSvg} aria-hidden="true">
          <circle cx="50" cy="50" r="47" className={styles.ringOuter} />
          <circle cx="50" cy="50" r="36" className={styles.ringInner} />
          <path d="M50 34 L58 50 L50 66 L42 50 Z" className={styles.flame} />
        </svg>
      </motion.div>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        BURGERS KOKAND
      </motion.h1>
      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
      >
        {t("loadingTagline", lang)}
      </motion.p>
      <div className={styles.loaderTrack}>
        <motion.div
          className={styles.loaderFill}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}
