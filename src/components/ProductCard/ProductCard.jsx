import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useFavorites } from "../../context/FavoritesContext";
import { formatPrice } from "../../utils/format";
import SealBadge from "../SealBadge/SealBadge";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, onOpen, variant = "grid" }) {
  const { lang, t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(product.id);

  return (
    <motion.article
      className={`${styles.card} ${variant === "row" ? styles.rowCard : ""}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        className={styles.imageBtn}
        onClick={() => onOpen(product)}
        aria-label={product.name[lang]}
      >
        <div className={styles.imageWrap}>
          <img
            src={product.images[0]}
            alt={product.name[lang]}
            className={styles.image}
            loading="lazy"
          />
          {!product.available && (
            <div className={styles.soldOutOverlay}>
              <span>{t("outOfStock")}</span>
            </div>
          )}
          {product.isBestSeller && <SealBadge />}
          {product.discount > 0 && (
            <span className={styles.discountTag}>-{product.discount}%</span>
          )}
          {product.isNew && !product.isBestSeller && (
            <span className={styles.newTag}>{t("newTag")}</span>
          )}
        </div>
      </button>

      <button
        className={`${styles.favBtn} ${fav ? styles.favBtnActive : ""}`}
        onClick={() => toggleFavorite(product.id)}
        aria-label={fav ? t("removeFromFavorites") : t("addToFavorites")}
        aria-pressed={fav}
      >
        <Heart size={16} fill={fav ? "currentColor" : "none"} />
      </button>

      <div className={styles.body} onClick={() => onOpen(product)}>
        <h3 className={styles.name}>{product.name[lang]}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
