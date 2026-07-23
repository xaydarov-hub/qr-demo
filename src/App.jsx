import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Splash from "./components/Splash/Splash";
import Home from "./pages/Home";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setShowSplash(false), 1700);
    return () => clearTimeout(id);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <AnimatePresence>{showSplash && <Splash />}</AnimatePresence>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
