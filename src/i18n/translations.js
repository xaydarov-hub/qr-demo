export const languages = [
  { code: "uz", label: "O'zbek" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

export const dict = {
  searchPlaceholder: {
    uz: "Taom qidirish...",
    ru: "Поиск блюда...",
    en: "Search the menu...",
  },
  noResults: {
    uz: "Hech narsa topilmadi",
    ru: "Ничего не найдено",
    en: "No dishes found",
  },
  noResultsHint: {
    uz: "Boshqa nom yoki kategoriya bilan qidirib ko'ring",
    ru: "Попробуйте другое название или категорию",
    en: "Try another name or category",
  },
  promotions: {
    uz: "Aksiyalar",
    ru: "Акции",
    en: "Promotions",
  },
  bestSellers: {
    uz: "Ko'p sotilgan",
    ru: "Хиты продаж",
    en: "Best Sellers",
  },
  newItems: {
    uz: "Yangi taomlar",
    ru: "Новинки",
    en: "New Arrivals",
  },
  discounts: {
    uz: "Chegirmalar",
    ru: "Скидки",
    en: "Discounts",
  },
  fullMenu: {
    uz: "To'liq menyu",
    ru: "Полное меню",
    en: "Full Menu",
  },
  seeAll: {
    uz: "Barchasi",
    ru: "Все",
    en: "See all",
  },
  addToFavorites: {
    uz: "Sevimlilarga qo'shish",
    ru: "В избранное",
    en: "Add to favorites",
  },
  removeFromFavorites: {
    uz: "Sevimlilardan olib tashlash",
    ru: "Убрать из избранного",
    en: "Remove from favorites",
  },
  favorites: {
    uz: "Sevimlilar",
    ru: "Избранное",
    en: "Favorites",
  },
  noFavorites: {
    uz: "Sevimlilar ro'yxati bo'sh",
    ru: "Список избранного пуст",
    en: "You haven't saved anything yet",
  },
  noFavoritesHint: {
    uz: "Yoqqan taomni yurak belgisi bilan saqlang",
    ru: "Нажмите на сердечко, чтобы сохранить блюдо",
    en: "Tap the heart on a dish to save it here",
  },
  calories: {
    uz: "Kaloriya",
    ru: "Калории",
    en: "Calories",
  },
  cookingTime: {
    uz: "Tayyorlanish vaqti",
    ru: "Время готовки",
    en: "Cooking time",
  },
  minutes: {
    uz: "daq",
    ru: "мин",
    en: "min",
  },
  allergens: {
    uz: "Allergenlar",
    ru: "Аллергены",
    en: "Allergens",
  },
  ingredients: {
    uz: "Tarkibi",
    ru: "Состав",
    en: "Ingredients",
  },
  related: {
    uz: "O'xshash taomlar",
    ru: "Похожие блюда",
    en: "You might also like",
  },
  outOfStock: {
    uz: "Tugagan",
    ru: "Нет в наличии",
    en: "Sold out",
  },
  available: {
    uz: "Mavjud",
    ru: "В наличии",
    en: "Available",
  },
  ourBranches: {
    uz: "Filiallarimiz",
    ru: "Наши филиалы",
    en: "Our Branches",
  },
  openOnMap: {
    uz: "Xaritada ochish",
    ru: "Открыть на карте",
    en: "Open in Maps",
  },
  workingHours: {
    uz: "Ish vaqti",
    ru: "Часы работы",
    en: "Working hours",
  },
  theme: {
    uz: "Rejim",
    ru: "Тема",
    en: "Theme",
  },
  language: {
    uz: "Til",
    ru: "Язык",
    en: "Language",
  },
  close: {
    uz: "Yopish",
    ru: "Закрыть",
    en: "Close",
  },
  bestSellerTag: {
    uz: "Xit",
    ru: "Хит",
    en: "Best Seller",
  },
  newTag: {
    uz: "Yangi",
    ru: "Новинка",
    en: "New",
  },
  loadingTagline: {
    uz: "Har bir tishlashda sifat",
    ru: "Качество в каждом укусе",
    en: "Quality in every bite",
  },
  footerRights: {
    uz: "Barcha huquqlar himoyalangan",
    ru: "Все права защищены",
    en: "All rights reserved",
  },
};

export function t(key, lang) {
  const entry = dict[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en ?? key;
}
