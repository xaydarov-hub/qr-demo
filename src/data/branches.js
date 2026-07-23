const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const branches = [
  {
    id: "br001",
    name: { uz: "Kokand Markaz", ru: "Коканд Центр", en: "Kokand Center" },
    address: {
      uz: "Furqat ko'chasi 24, Qo'qon",
      ru: "ул. Фурката 24, Коканд",
      en: "24 Furqat St, Kokand",
    },
    phone: "+998 71 200 10 10",
    hours: "09:00 – 23:00",
    photo: img("photo-1552566626-52f8b828add9"),
    mapUrl: "https://maps.google.com/?q=Kokand+Center",
    lat: 40.5283,
    lng: 70.9425,
  },
  {
    id: "br002",
    name: { uz: "Kokand Bozor", ru: "Коканд Базар", en: "Kokand Bazaar" },
    address: {
      uz: "Mustaqillik ko'chasi 8, Qo'qon",
      ru: "ул. Мустакиллик 8, Коканд",
      en: "8 Mustaqillik St, Kokand",
    },
    phone: "+998 71 200 10 20",
    hours: "10:00 – 22:00",
    photo: img("photo-1414235077428-338989a2e8c0"),
    mapUrl: "https://maps.google.com/?q=Kokand+Bazaar",
    lat: 40.5361,
    lng: 70.9463,
  },
];

export const restaurant = {
  name: "Burgers Kokand",
  tagline: {
    uz: "Har bir tishlashda sifat",
    ru: "Качество в каждом укусе",
    en: "Quality in every bite",
  },
  phone: "+998 71 200 10 10",
  address: {
    uz: "Furqat ko'chasi 24, Qo'qon",
    ru: "ул. Фурката 24, Коканд",
    en: "24 Furqat St, Kokand",
  },
  hours: "09:00 – 23:00",
  instagram: "https://instagram.com/burgerskokand",
  telegram: "https://t.me/burgerskokand",
  mapUrl: "https://maps.google.com/?q=Burgers+Kokand",
  version: "1.0.0",
};
