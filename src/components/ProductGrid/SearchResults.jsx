import { SearchX } from "lucide-react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";
import empty from "./SearchResults.module.css";

export default function SearchResults({ products, onOpen, t }) {
  if (products.length === 0) {
    return (
      <div className={empty.empty}>
        <SearchX size={34} strokeWidth={1.5} />
        <p className={empty.title}>{t("noResults")}</p>
        <p className={empty.hint}>{t("noResultsHint")}</p>
      </div>
    );
  }

  return (
    <section className={styles.menu}>
      <div className={styles.group} style={{ scrollMarginTop: 0 }}>
        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
