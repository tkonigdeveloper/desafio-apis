import napolitana from "../assets/napolitana.jpg";
import espanola from "../assets/espanola.jpg";
import peppe from "../assets/peppe.jpg";

// NOTA: solo tienes 3 imágenes locales en /assets (napolitana, espanola, peppe).
// Las 3 pizzas nuevas usan URLs remotas (Unsplash). Si prefieres, descarga esas
// imágenes a /src/assets y reemplaza la URL por un import local, igual que las otras.
const salame =
  "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80";
const cuatroQuesos =
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80";
const mexicana =
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80";

// Array principal: 6 pizzas para renderizar en Home.
export const pizzas = [
  {
    id: 1,
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: napolitana,
  },
  {
    id: 2,
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: espanola,
  },
  {
    id: 3,
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: peppe,
  },
  {
    id: 4,
    name: "Salame",
    price: 5990,
    ingredients: ["mozzarella", "salame", "tomates", "albahaca"],
    img: salame,
  },
  {
    id: 5,
    name: "Cuatro Quesos",
    price: 7250,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: cuatroQuesos,
  },
  {
    id: 6,
    name: "Mexicana",
    price: 6450,
    ingredients: ["mozzarella", "carne", "jalapeños", "pimentón"],
    img: mexicana,
  },
];

// Array que simula el carrito de compras (con cantidad por pizza).
export const pizzaCart = [
  {
    id: 1,
    name: "Napolitana",
    price: 5950,
    count: 1,
    img: napolitana,
  },
  {
    id: 2,
    name: "Española",
    price: 6950,
    count: 1,
    img: espanola,
  },
  {
    id: 4,
    name: "Salame",
    price: 5990,
    count: 1,
    img: salame,
  },
];
