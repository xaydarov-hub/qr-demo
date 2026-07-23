import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { banners } from "../data/banners";
import { branches } from "../data/branches";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryScroll from "../components/CategoryScroll/CategoryScroll";
import ProductRow from "../components/ProductRow/ProductRow";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import SearchResults from "../components/ProductGrid/SearchResults";
import ProductModal from "../components/ProductModal/ProductModal";
import FavoritesDrawer from "../components/FavoritesDrawer/FavoritesDrawer";
import SettingsSheet from "../components/LangTheme/SettingsSheet";
import BranchCard from "../components/BranchCard/BranchCard";
import Footer from "../components/Footer/Footer";
import { CardSkeletonRow } from "../components/Skeletons/CardSkeleton";
import { useDebounce } from "../hooks/useDebounce";
import styles from "./Home.module.css";

export default function Home() {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 220);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const gridTopRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 550);
    return () => clearTimeout(id);
  }, []);

  const isSearching = debouncedQuery.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const q = debouncedQuery.trim().toLowerCase();
    return products.filter((p) => {
      const name = p.name[lang].toLowerCase();
      const catNames = categories.find((c) => c.id === p.categoryId)?.name[lang]?.toLowerCase() ?? "";
      const ingredients = p.ingredients[lang].join(" ").toLowerCase();
      return name.includes(q) || catNames.includes(q) || ingredients.includes(q);
    });
  }, [isSearching, debouncedQuery, lang]);

  const bestSellers = useMemo(() => products.filter((p) => p.isBestSeller), []);
  const newItems = useMemo(() => products.filter((p) => p.isNew), []);
  const discountItems = useMemo(() => products.filter((p) => p.discount > 0), []);

  const menuProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.categoryId === activeCategory);
  }, [activeCategory]);

  const handleSelectCategory = (id) => {
    setActiveCategory(id);
    if (id === "all") {
      gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    requestAnimationFrame(() => {
      const el = document.getElementById(`cat-${id}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleExplore = (targetCategory) => {
    setQuery("");
    handleSelectCategory(targetCategory ?? "all");
  };

  const relatedFor = (product) =>
    products.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 8);

  return (
    <div className={styles.page}>
      <Header onOpenFavorites={() => setFavoritesOpen(true)} onOpenSettings={() => setSettingsOpen(true)} />

      <Hero banners={banners} onExplore={handleExplore} />

      <div className={`container ${styles.searchWrap}`}>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {!isSearching && (
        <CategoryScroll categories={categories} activeId={activeCategory} onSelect={handleSelectCategory} />
      )}

      <div ref={gridTopRef} />

      {isSearching ? (
        <SearchResults products={searchResults} onOpen={setSelectedProduct} t={t} />
      ) : loading ? (
        <>
          <CardSkeletonRow />
          <div style={{ marginTop: 34 }}>
            <CardSkeletonRow />
          </div>
        </>
      ) : (
        <>
          <ProductRow eyebrow={t("bestSellers")} title={t("bestSellers")} products={bestSellers} onOpen={setSelectedProduct} />
          <ProductRow eyebrow={t("discounts")} title={t("discounts")} products={discountItems} onOpen={setSelectedProduct} />
          <ProductRow eyebrow={t("newItems")} title={t("newItems")} products={newItems} onOpen={setSelectedProduct} />

          <ProductGrid
            categories={categories}
            products={menuProducts}
            onOpen={setSelectedProduct}
            t={t}
            fullMenuLabel={t("fullMenu")}
          />

          <section className={styles.branchSection}>
            <h2 className={styles.branchTitle}>{t("ourBranches")}</h2>
            <div className={`scroll-row`}>
              {branches.map((b) => (
                <BranchCard key={b.id} branch={b} />
              ))}
            </div>
          </section>
        </>
      )}

      <Footer />

      <ProductModal
        product={selectedProduct}
        related={selectedProduct ? relatedFor(selectedProduct) : []}
        onClose={() => setSelectedProduct(null)}
        onOpenRelated={setSelectedProduct}
      />

      <FavoritesDrawer
        open={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        onOpenProduct={(p) => {
          setFavoritesOpen(false);
          setSelectedProduct(p);
        }}
      />

      <SettingsSheet open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
}
