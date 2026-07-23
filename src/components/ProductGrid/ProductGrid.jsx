import { useLanguage } from "../../context/LanguageContext";
import ProductCard from "../ProductCard/ProductCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ categories, products, onOpen, t, fullMenuLabel }) {
  const { lang } = useLanguage();

  const grouped = categories
    .filter((c) => c.id !== "all")
    .map((cat) => ({
      cat,
      items: products.filter((p) => p.categoryId === cat.id),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section className={styles.menu}>
      <SectionHeader eyebrow={fullMenuLabel} title={t("fullMenu")} />
      {grouped.map(({ cat, items }) => (
        <div key={cat.id} id={`cat-${cat.id}`} className={styles.group}>
          <h3 className={styles.groupTitle}>{cat.name[lang]}</h3>
          <div className={styles.grid}>
            {items.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={onOpen} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
