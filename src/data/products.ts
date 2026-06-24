import pr1 from "@/assets/products/pr1.jpg";
import pr2 from "@/assets/products/pr2.jpg";
import pr3 from "@/assets/products/pr3.jpg";
import pr4 from "@/assets/products/pr4.jpg";
import pr5 from "@/assets/products/pr5.jpg";
import pr6 from "@/assets/products/pr6.jpg";
import pr7 from "@/assets/products/pr7.jpg";
import pr8 from "@/assets/products/pr8.jpg";
import pr9 from "@/assets/products/pr9.jpg";
import pr10 from "@/assets/products/pr10.jpg";
import pr11 from "@/assets/products/pr11.jpg";
import pr12 from "@/assets/products/pr12.jpg";
import pr13 from "@/assets/products/pr13.jpg";
import pr14 from "@/assets/products/pr14.jpg";
import pr15 from "@/assets/products/pr15.jpg";
import pr16 from "@/assets/products/pr16.jpg";
import pr17 from "@/assets/products/pr17.jpg";
import pr18 from "@/assets/products/pr18.jpg";
import pr19 from "@/assets/products/pr19.jpg";
import pr20 from "@/assets/products/pr20.jpg";
import pr21 from "@/assets/products/pr21.jpg";
import pr22 from "@/assets/products/pr22.jpg";
import pr23 from "@/assets/products/pr23.jpg";
import pr24 from "@/assets/products/pr24.jpg";
import pr25 from "@/assets/products/pr25.jpg";
import pr26 from "@/assets/products/pr26.jpg";

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
    image: pr1,
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
    image: pr2,
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
    image: pr3,
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
    image: pr4,
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
    image: pr5,
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
    image: pr6,
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
    image: pr7,
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
    image: pr8,
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
    image: pr9,
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
    image: pr10,
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
    image: pr11,
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
    image: pr12,
    scent: "Wild Berries & Vanilla",
    burnTime: "30 hours",
    description:
      "Sweet wild berries swirled with creamy vanilla. A romantic, gift-worthy candle in a clean glass jar.",
  },
  {
    id: 13,
    slug: "amber-fig-glow",
    name: "Amber Fig Glow",
    price: 479,
    category: "Luxury Candles",
    image: pr13,
    scent: "Amber Fig & Dark Honey",
    burnTime: "36 hours",
    description:
      "A warm amber fragrance with fig sweetness and a smooth honey finish for an elevated evening glow.",
  },
  {
    id: 14,
    slug: "gardenia-dream",
    name: "Gardenia Dream",
    price: 429,
    category: "Floral Collection",
    image: pr14,
    scent: "Gardenia & White Tea",
    burnTime: "28 hours",
    description:
      "Delicate gardenia petals with fresh white tea for a clean, serene floral escape.",
  },
  {
    id: 15,
    slug: "cocoa-silk",
    name: "Cocoa Silk",
    price: 329,
    category: "Jar Candles",
    image: pr15,
    scent: "Cocoa & Soft Vanilla",
    burnTime: "26 hours",
    description:
      "Comforting cocoa sweetness balanced with silky vanilla notes for cozy, slow-burning warmth.",
  },
  {
    id: 16,
    slug: "sage-mint",
    name: "Sage Mint",
    price: 349,
    category: "Home Decor",
    image: pr16,
    scent: "Sage Leaf & Cool Mint",
    burnTime: "24 hours",
    description:
      "A crisp, refreshing scent blend that makes your space feel instantly clean and calm.",
  },
  {
    id: 17,
    slug: "peach-rose",
    name: "Peach Rose",
    price: 459,
    category: "Floral Collection",
    image: pr17,
    scent: "Peach Blossom & Rose",
    burnTime: "32 hours",
    description:
      "A romantic fruity-floral profile with juicy peach and rose petals, softly filling the room.",
  },
  {
    id: 18,
    slug: "cedar-linen",
    name: "Cedar Linen",
    price: 279,
    category: "Jar Candles",
    image: pr18,
    scent: "Cedarwood & Linen",
    burnTime: "22 hours",
    description:
      "Clean linen freshness layered with smooth cedar for an airy, everyday kind of luxury.",
  },
  {
    id: 19,
    slug: "cherry-bark",
    name: "Cherry Bark",
    price: 499,
    category: "Luxury Candles",
    image: pr19,
    scent: "Black Cherry & Spiced Bark",
    burnTime: "38 hours",
    description:
      "Deep cherry richness with subtle spice notes and a woody finish for a bold ambience.",
  },
  {
    id: 20,
    slug: "vanilla-sky",
    name: "Vanilla Sky",
    price: 389,
    category: "Gift Collection",
    image: pr20,
    scent: "Vanilla Cloud",
    burnTime: "34 hours",
    description:
      "Creamy vanilla with a soft, airy feel—perfect for gifts and long, comforting nights in.",
  },
  {
    id: 21,
    slug: "rosewood-heart",
    name: "Rosewood Heart",
    price: 629,
    category: "Heart Collection",
    image: pr21,
    scent: "Rosewood & Musk",
    burnTime: "42 hours",
    description:
      "A heart-shaped statement candle with warm rosewood and gentle musk for an intimate atmosphere.",
  },
  {
    id: 22,
    slug: "citrus-noir",
    name: "Citrus Noir",
    price: 419,
    category: "Home Decor",
    image: pr22,
    scent: "Bergamot & Black Tea",
    burnTime: "27 hours",
    description:
      "Bright bergamot meets dark tea notes for a modern, balanced fragrance profile.",
  },
  {
    id: 23,
    slug: "lavender-lace",
    name: "Lavender Lace",
    price: 369,
    category: "Floral Collection",
    image: pr23,
    scent: "Lavender & Linen",
    burnTime: "26 hours",
    description:
      "Soft lavender petals blended with clean linen—calm, delicate, and beautifully relaxing.",
  },
  {
    id: 24,
    slug: "smoked-vanilla",
    name: "Smoked Vanilla",
    price: 549,
    category: "Luxury Candles",
    image: pr24,
    scent: "Smoked Vanilla & Amber",
    burnTime: "44 hours",
    description:
      "A rich smoked-vanilla warmth wrapped in amber depth for a premium evening mood.",
  },
  {
    id: 25,
    slug: "golden-mandarin",
    name: "Golden Mandarin",
    price: 449,
    category: "Gift Collection",
    image: pr25,
    scent: "Mandarin & Vanilla",
    burnTime: "30 hours",
    description:
      "Sweet mandarin brightness with creamy vanilla for a uplifting yet comforting burn.",
  },
  {
    id: 26,
    slug: "coastal-winds",
    name: "Coastal Winds",
    price: 399,
    category: "Jar Candles",
    image: pr26,
    scent: "Sea Air & Driftwood",
    burnTime: "28 hours",
    description:
      "Fresh sea air with driftwood warmth—like a gentle breeze moving through your home.",
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

