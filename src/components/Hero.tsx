import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLeaf, FaHeart, FaFire, FaGem } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import hero from "@/assets/hero.jpg";

// Load product images dynamically via Vite glob (use eager+as:url to get URLs)
const productModules = import.meta.glob(
  "/src/assets/products/*.{jpg,jpeg,png}",
  { eager: true, as: "url" }
) as Record<string, string>;

const productImages: string[] = Object.values(productModules || {});



const bannerSlides = [
  {
    eyebrow: "Handcrafted Candles",
    title: ["Crafted with ", "Love,"],
    title2: ["Lit with ", "Luxury"],
    sub: "Handmade scented candles for beautiful spaces and unforgettable moments.",
    image: (await import("@/assets/banner/Banner1.png")).default,
  },
  {
    eyebrow: "Lunelle Signature",
    title: ["Illuminate ", "Every"],
    title2: ["", "Moment"],
    sub: "Premium soy wax candles infused with luxury fragrance oils.",
    image: (await import("@/assets/banner/Banner2.png")).default,
  },
  {
    eyebrow: "Made by Hand",
    title: ["Handcrafted ", "with"],
    title2: ["", "Passion"],
    sub: "Each candle is hand-poured in small batches with love and care.",
    image: (await import("@/assets/banner/Banner3.png")).default,
  },
  {
    eyebrow: "The Lunelle Promise",
    title: ["Luxury You ", "Can See,"],
    title2: ["Fragrance You ", "Can Feel"],
    sub: "An indulgent sensory experience for the modern home.",
    image: (await import("@/assets/banner/Banner4.png")).default,
  },
];

const usp = [
  { Icon: FaLeaf, label: "Premium Ingredients" },
  { Icon: FaFire, label: "Long Lasting" },
  { Icon: FaHeart, label: "Handmade With Love" },
  { Icon: FaGem, label: "Eco Friendly" },
];

export default function Hero() {
  const activeSlides = bannerSlides;

  return (
    <section className="relative overflow-hidden bg-gradient-luxury">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[620px] sm:h-[640px] md:h-[700px]"
      >
        {activeSlides.map((slide, idx) => {
          const isHeroImage = slide.image === hero;

          const outerClass = `relative mx-auto flex h-full max-w-7xl items-center px-6 md:px-10 justify-start`;
          // Move the whole text block further left so ALL headings are in the brightest fade region
          const innerClass = `w-full md:w-1/2 lg:w-5/12 max-w-md md:max-w-lg lg:max-w-xl text-left -ml-[20px] md:-ml-[100px]`;

          return (
            <SwiperSlide key={idx}>
              <div className="relative h-full">

                {/* Banner background */}
                <div
                  aria-hidden
                  style={{ backgroundImage: `url(${slide.image || hero})` }}
                  className="absolute inset-0 bg-cover bg-center"
                />

                {/* Text-only readability layers (do NOT haze product area) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-2/3"
                >
                  {/* Strongest behind text, fading toward center (white fade from left) */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.98) 18%, rgba(255,255,255,0.78) 34%, rgba(255,255,255,0.38) 52%, rgba(255,255,255,0.14) 66%, rgba(255,255,255,0) 82%)",
                    }}
                  />


                  {/* Soft radial glow behind the text block */}
                  <div
                    className="absolute left-[20px] top-1/2 h-[420px] w-[420px] -translate-y-1/2"
                    style={{
                      background:
                        "radial-gradient(circle at 40% 50%, rgba(255,245,240,0.9) 0%, rgba(255,245,240,0.6) 25%, rgba(255,245,240,0.25) 45%, rgba(255,245,240,0) 68%)",
                      filter: "blur(30px)",
                    }}
                  />
                </div>

                <div className={outerClass}>
                  <div className={innerClass}>
                    <motion.div
                      key={`eye-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-3 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.28em] text-primary"

                    >
                      <span className="h-px w-8 bg-primary" />
                      <FaHeart className="h-3 w-3" />
                      {slide.eyebrow}
                    </motion.div>

                    <motion.h1
                      key={`t-${idx}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                      className="font-display text-2xl leading-snug md:text-4xl lg:text-5xl text-[#2B1E19] [text-shadow:0_2px_12px_rgba(255,255,255,0.85)]"

                    >
                      {slide.title[0]}
                      <span className="font-bold text-[#E89CAD]">{slide.title[1]}</span>
                      <br />
                      {slide.title2[0]}
                      <span className="font-bold text-[#E89CAD]">{slide.title2[1]}</span>
                    </motion.h1>

                    <motion.p
                      key={`s-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-5 max-w-[520px] text-[14px] text-[#4A3A34] font-medium md:text-[15px] lg:text-[16px]"

                    >
                      {slide.sub}
                    </motion.p>

                    <motion.div
                      key={`b-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                      className="mt-8 flex flex-wrap gap-3"
                    >
                      <Link
                        to="/shop"
                        className="rounded-full bg-gradient-rose px-8 py-3 text-sm font-medium uppercase tracking-wider text-white shadow-luxury transition hover:scale-105"
                      >
                        Shop Now
                      </Link>
                      <Link
                        to="/collections"
                        className="rounded-full border-2 border-primary bg-white/40 px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary backdrop-blur transition hover:bg-primary hover:text-white"
                      >
                        Explore Collections
                      </Link>
                    </motion.div>

                    <motion.div
                      key={`u-${idx}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="mt-10 hidden gap-6 md:flex"
                    >
                      {usp.map(({ Icon, label }) => (
                        <div key={label} className="flex flex-col items-center text-center">
                          <div className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 bg-white/60 text-primary">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="mt-2 text-[10px] uppercase tracking-wider text-foreground/70">
                            {label}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute right-8 top-16 hidden h-28 w-28 place-items-center rounded-full border-2 border-gold bg-white/80 text-center font-display text-gold shadow-luxury md:grid md:h-36 md:w-36"
                >
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-[10px] uppercase tracking-[0.2em]">Handmade</div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

