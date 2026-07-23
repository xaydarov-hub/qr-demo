import SectionHeader from "../SectionHeader/SectionHeader";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductRow.module.css";

export default function ProductRow({ eyebrow, title, products, onOpen }) {
  if (!products.length) return null;

  return (
    <section className={styles.section}>
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className={`scroll-row`}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={onOpen} variant="row" />
        ))}
      </div>
    </section>
  );
}
