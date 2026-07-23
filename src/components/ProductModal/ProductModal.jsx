import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Heart, ChevronLeft, ChevronRight, Flame, Clock, TriangleAlert } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useFavorites } from "../../context/FavoritesContext";
import { formatPrice } from "../../utils/format";
import styles from "./ProductModal.module.css";

export default function ProductModal({ product, related, onClose, onOpenRelated }) {
  const { lang, t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [imgIndex, setImgIndex] = useState(0);

  if (!product) return null;

  const fav = isFavorite(product.id);
  const images = product.images;

  const next = () => setImgIndex((i) => (i + 1) % images.length);
  const prev = () => setImgIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.sheet}
          role="dialog"
          aria-modal="true"
          aria-label={product.name[lang]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={onClose} aria-label={t("close")}>
            <X size={18} />
          </button>

          <div className={styles.gallery}>
            <img src={images[imgIndex]} alt={product.name[lang]} className={styles.galleryImage} />
            {!product.available && (
              <div className={styles.soldOutBanner}>{t("outOfStock")}</div>
            )}
            {images.length > 1 && (
              <>
                <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev} aria-label="Previous image">
                  <ChevronLeft size={18} />
                </button>
                <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next} aria-label="Next image">
                  <ChevronRight size={18} />
                </button>
                <div className={styles.dots}>
                  {images.map((_, i) => (
                    <span key={i} className={`${styles.dot} ${i === imgIndex ? styles.dotActive : ""}`} />
                  ))}
                </div>
              </>
            )}
            <button
              className={`${styles.favBtn} ${fav ? styles.favBtnActive : ""}`}
              onClick={() => toggleFavorite(product.id)}
              aria-label={fav ? t("removeFromFavorites") : t("addToFavorites")}
              aria-pressed={fav}
            >
              <Heart size={18} fill={fav ? "currentColor" : "none"} />
            </button>
          </div>

          <div className={styles.content}>
            <div className={styles.titleRow}>
              <h2 className={styles.name}>{product.name[lang]}</h2>
              <span className={`${styles.status} ${product.available ? styles.statusOk : styles.statusOff}`}>
                {product.available ? t("available") : t("outOfStock")}
              </span>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.price}>{formatPrice(product.price)}</span>
              {product.oldPrice && <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>}
              {product.discount > 0 && <span className={styles.discountTag}>-{product.discount}%</span>}
            </div>

            <p className={styles.description}>{product.description[lang]}</p>

            <div className={styles.metaGrid}>
              <div className={styles.metaCard}>
                <Flame size={16} className={styles.metaIcon} />
                <span className={styles.metaLabel}>{t("calories")}</span>
                <span className={styles.metaValue}>{product.calories} kcal</span>
              </div>
              <div className={styles.metaCard}>
                <Clock size={16} className={styles.metaIcon} />
                <span className={styles.metaLabel}>{t("cookingTime")}</span>
                <span className={styles.metaValue}>
                  {product.cookingTime} {t("minutes")}
                </span>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{t("ingredients")}</h3>
              <div className={styles.chips}>
                {product.ingredients[lang].map((ing) => (
                  <span key={ing} className={styles.chip}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {product.allergens[lang].length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <TriangleAlert size={14} /> {t("allergens")}
                </h3>
                <div className={styles.chips}>
                  {product.allergens[lang].map((a) => (
                    <span key={a} className={`${styles.chip} ${styles.chipWarn}`}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {related.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>{t("related")}</h3>
                <div className={`scroll-row ${styles.relatedRow}`}>
                  {related.map((r) => (
                    <button key={r.id} className={styles.relatedCard} onClick={() => onOpenRelated(r)}>
                      <img src={r.images[0]} alt={r.name[lang]} className={styles.relatedImage} />
                      <span className={styles.relatedName}>{r.name[lang]}</span>
                      <span className={styles.relatedPrice}>{formatPrice(r.price)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
