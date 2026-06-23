import pinkVelvet from "@/assets/products/pink-velvet-bliss.jpg";
import tulip from "@/assets/products/tulip-bouquet.jpg";
import floralStar from "@/assets/products/floral-star-bowl.jpg";
import vanillaHeart from "@/assets/products/vanilla-heart-jar.jpg";
import espresso from "@/assets/products/espresso-glow.jpg";
import seaBreeze from "@/assets/products/sea-breeze.jpg";
import whiteOud from "@/assets/products/white-oud.jpg";
import bubbleCube from "@/assets/products/bubble-cube.jpg";
import cinnamon from "@/assets/products/cinnamon-chai.jpg";
import floralHeart from "@/assets/products/floral-heart.jpg";
import blueOcean from "@/assets/products/blue-ocean.jpg";
import berryVanilla from "@/assets/products/berry-vanilla.jpg";

export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  scent: string;
  burnTime: string;
};

export const categories = [
  "Luxury Candles",
  "Jar Candles",
  "Heart Collection",
  "Floral Collection",
  "Home Decor",
  "Gift Collection",
] as const;

export const products: Product[] = [
  {
    id: 1,
    slug: "pink-velvet-bliss",
    name: "Pink Velvet Bliss",
    price: 349,
    category: "Luxury Candles",
    image: pinkVelvet,
    scent: "Rose & Peony",
    burnTime: "30 hours",
    description:
      "A romantic pink pillar candle crafted from 100% natural soy wax. The soft rose and peony notes create an aura of effortless elegance.",
  },
  {
    id: 2,
    slug: "tulip-bouquet",
    name: "Tulip Bouquet Candle",
    price: 449,
    category: "Floral Collection",
    image: tulip,
    scent: "Fresh Tulip & Spring Garden",
    burnTime: "25 hours",
    description:
      "A handcrafted bouquet of tulip-shaped wax sculptures. As beautiful unlit as it is when glowing — a true centerpiece.",
  },
  {
    id: 3,
    slug: "floral-star-bowl",
    name: "Floral Star Bowl",
    price: 499,
    category: "Home Decor",
    image: floralStar,
    scent: "Jasmine & White Musk",
    burnTime: "35 hours",
    description:
      "A star-shaped wax bowl adorned with delicate floral details. A statement piece that doubles as home decor.",
  },
  {
    id: 4,
    slug: "vanilla-heart-jar",
    name: "Vanilla Heart Jar",
    price: 699,
    category: "Heart Collection",
    image: vanillaHeart,
    scent: "Madagascar Vanilla",
    burnTime: "45 hours",
    description:
      "A premium heart-shaped jar candle infused with rich Madagascar vanilla. A symbol of love that fills your space with warmth.",
  },
  {
    id: 5,
    slug: "espresso-glow",
    name: "Espresso Glow",
    price: 699,
    category: "Jar Candles",
    image: espresso,
    scent: "Espresso & Caramel",
    burnTime: "45 hours",
    description:
      "Dark, indulgent, and warm. Roasted espresso meets caramelized sugar in this rich amber jar candle.",
  },
  {
    id: 6,
    slug: "sea-breeze",
    name: "Sea Breeze",
    price: 449,
    category: "Jar Candles",
    image: seaBreeze,
    scent: "Ocean Mist & Sea Salt",
    burnTime: "30 hours",
    description:
      "Coastal calm in a candle. Cool ocean mist, sea salt, and a hint of driftwood transport you straight to the shore.",
  },
  {
    id: 7,
    slug: "white-oud",
    name: "White Oud",
    price: 499,
    category: "Luxury Candles",
    image: whiteOud,
    scent: "White Oud & Sandalwood",
    burnTime: "40 hours",
    description:
      "An opulent fragrance of rare white oud, layered with creamy sandalwood. Presented in a textured ceramic jar with gold rim.",
  },
  {
    id: 8,
    slug: "bubble-cube",
    name: "Bubble Cube",
    price: 159,
    category: "Home Decor",
    image: bubbleCube,
    scent: "Cotton Candy & Rose",
    burnTime: "15 hours",
    description:
      "Playful, sculptural, sweet. A bubble-textured pink wax cube that brings personality to any shelf or vanity.",
  },
  {
    id: 9,
    slug: "cinnamon-chai",
    name: "Cinnamon Chai Candle",
    price: 249,
    category: "Jar Candles",
    image: cinnamon,
    scent: "Cinnamon, Cardamom & Clove",
    burnTime: "25 hours",
    description:
      "The warmth of a freshly brewed masala chai. Cinnamon, cardamom, clove, and a whisper of black tea.",
  },
  {
    id: 10,
    slug: "floral-heart",
    name: "Floral Heart Candle",
    price: 699,
    category: "Heart Collection",
    image: floralHeart,
    scent: "Rose Garden",
    burnTime: "40 hours",
    description:
      "An intricately sculpted heart of roses, hand-poured in soft pink wax. The most beautiful way to say 'I love you'.",
  },
  {
    id: 11,
    slug: "blue-ocean",
    name: "Blue Ocean Candle",
    price: 599,
    category: "Gift Collection",
    image: blueOcean,
    scent: "Blue Lotus & Sea Salt",
    burnTime: "40 hours",
    description:
      "Deep blue glass, lotus and salt-spray notes. A serene gift-ready candle wrapped in coastal calm.",
  },
  {
    id: 12,
    slug: "berry-vanilla",
    name: "Berry Vanilla Bliss",
    price: 399,
    category: "Gift Collection",
    image: berryVanilla,
    scent: "Wild Berries & Vanilla",
    burnTime: "30 hours",
    description:
      "Sweet wild berries swirled with creamy vanilla. A romantic, gift-worthy candle in a clean glass jar.",
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
