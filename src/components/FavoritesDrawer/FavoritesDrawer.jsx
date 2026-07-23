import { AnimatePresence, motion } from "framer-motion";
import { X, Heart } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useFavorites } from "../../context/FavoritesContext";
import { products } from "../../data/products";
import { formatPrice } from "../../utils/format";
import styles from "./FavoritesDrawer.module.css";

export default function FavoritesDrawer({ open, onClose, onOpenProduct }) {
  const { lang, t } = useLanguage();
  const { favoriteIds, toggleFavorite } = useFavorites();

  const favProducts = products.filter((p) => favoriteIds.includes(p.id));

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
          <motion.aside
            className={styles.drawer}
            role="dialog"
            aria-label={t("favorites")}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>{t("favorites")}</h2>
              <button className={styles.closeBtn} onClick={onClose} aria-label={t("close")}>
                <X size={18} />
              </button>
            </div>

            {favProducts.length === 0 ? (
              <div className={styles.empty}>
                <Heart size={30} strokeWidth={1.5} />
                <p className={styles.emptyTitle}>{t("noFavorites")}</p>
                <p className={styles.emptyHint}>{t("noFavoritesHint")}</p>
              </div>
            ) : (
              <ul className={styles.list}>
                {favProducts.map((p) => (
                  <li key={p.id} className={styles.item}>
                    <button className={styles.itemMain} onClick={() => onOpenProduct(p)}>
                      <img src={p.images[0]} alt={p.name[lang]} className={styles.itemImage} />
                      <div className={styles.itemInfo}>
                        <span className={styles.itemName}>{p.name[lang]}</span>
                        <span className={styles.itemPrice}>{formatPrice(p.price)}</span>
                      </div>
                    </button>
                    <button
                      className={styles.removeBtn}
                      onClick={() => toggleFavorite(p.id)}
                      aria-label={t("removeFromFavorites")}
                    >
                      <Heart size={16} fill="currentColor" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
