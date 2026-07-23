import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Hero.module.css";

export default function Hero({ banners, onExplore }) {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5500);
    return () => clearInterval(id);
  }, [banners.length]);

  const banner = banners[index];

  return (
    <section className={styles.hero} aria-label="Promotions">
      <AnimatePresence mode="wait">
        <motion.div
          key={banner.id}
          className={styles.slide}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={banner.image} alt="" className={styles.image} loading="eager" />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <span className={styles.eyebrow}>BURGERS KOKAND</span>
            <h1 className={styles.title}>{banner.title[lang]}</h1>
            <p className={styles.subtitle}>{banner.subtitle[lang]}</p>
            <button className={styles.cta} onClick={() => onExplore(banner.targetCategory)}>
              {banner.buttonLabel[lang]}
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.dots}>
        {banners.map((b, i) => (
          <button
            key={b.id}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
