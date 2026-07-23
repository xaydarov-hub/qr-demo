const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const banners = [
  {
    id: "b001",
    title: { uz: "Yangi Smash Liniyasi", ru: "Новая линейка Смэш", en: "The New Smash Line" },
    subtitle: {
      uz: "Ikki qavat go'sht, eritilgan pishloq, mukammal qarsillash.",
      ru: "Двойное мясо, расплавленный сыр, идеальная хрустящая корочка.",
      en: "Double patties, melted cheese, the perfect sear.",
    },
    image: img("photo-1571091718767-18b5b1457add"),
    buttonLabel: { uz: "Ko'rish", ru: "Смотреть", en: "Explore" },
    targetCategory: "smash",
  },
  {
    id: "b002",
    title: { uz: "Kuningizni Boshlang", ru: "Начните день", en: "Start Your Order" },
    subtitle: {
      uz: "Tanlangan taomlarga 15% gacha chegirma.",
      ru: "Скидки до 15% на избранные позиции.",
      en: "Up to 15% off on selected favorites, today only.",
    },
    image: img("photo-1550547660-d9450f859349"),
    buttonLabel: { uz: "Aksiyalar", ru: "Акции", en: "See Deals" },
    targetCategory: "burgers",
  },
  {
    id: "b003",
    title: { uz: "Premium Truffle", ru: "Премиум Трюфель", en: "Premium Truffle" },
    subtitle: {
      uz: "Cheklangan taklif — faqat shu mavsumda.",
      ru: "Ограниченное предложение — только в этом сезоне.",
      en: "A limited-run recipe, only while it lasts.",
    },
    image: img("photo-1586190848861-99aa4a171e90"),
    buttonLabel: { uz: "Buyurtma", ru: "Заказать", en: "Order Now" },
    targetCategory: "burgers",
  },
];

export const promotions = [
  {
    id: "promo001",
    title: { uz: "Kombo -20%", ru: "Комбо -20%", en: "Combo -20%" },
    description: {
      uz: "Har qanday burger + fri + ichimlik kombosida 20% chegirma.",
      ru: "Скидка 20% на любое комбо: бургер + фри + напиток.",
      en: "20% off any burger + fries + drink combo.",
    },
    active: true,
    startsAt: "2026-07-01",
    endsAt: "2026-08-31",
  },
  {
    id: "promo002",
    title: { uz: "Tushlik vaqti", ru: "Время обеда", en: "Lunch Hour" },
    description: {
      uz: "13:00–15:00 oralig'ida barcha burgerlarga 10% chegirma.",
      ru: "С 13:00 до 15:00 скидка 10% на все бургеры.",
      en: "10% off all burgers between 1–3 PM.",
    },
    active: true,
    startsAt: "2026-01-01",
    endsAt: "2026-12-31",
  },
];
