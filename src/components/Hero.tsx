import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaHeart, FaFire, FaGem } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import hero from "@/assets/hero.jpg";
// Load product images dynamically via Vite glob (use eager+as:url to get URLs)
const productModules = import.meta.glob('/src/assets/products/*.{jpg,jpeg,png}', { eager: true, as: 'url' }) as Record<string, string>;
const productImages: string[] = Object.values(productModules || {});

const defaultSlides = [
  {
    eyebrow: "Handcrafted Candles",
    title: ["Crafted with ", "Love,"],
    title2: ["Lit with ", "Luxury"],
    sub: "Handmade scented candles for beautiful spaces and unforgettable moments.",
    image: hero,
    layout: "left",
  },
  {
    eyebrow: "Lunelle Signature",
    title: ["Illuminate ", "Every"],
    title2: ["", "Moment"],
    sub: "Premium soy wax candles infused with luxury fragrance oils.",
    image: productImages[0] ?? hero,
    layout: "center",
  },
  {
    eyebrow: "Made by Hand",
    title: ["Handcrafted ", "with"],
    title2: ["", "Passion"],
    sub: "Each candle is hand-poured in small batches with love and care.",
    image: productImages[1] ?? hero,
    layout: "right",
  },
  {
    eyebrow: "The Lunelle Promise",
    title: ["Luxury You ", "Can See,"],
    title2: ["Fragrance You ", "Can Feel"],
    sub: "An indulgent sensory experience for the modern home.",
    image: productImages[2] ?? hero,
    layout: "left",
  },
  {
    eyebrow: "Celebrate Always",
    title: ["Light Up Life's ", ""],
    title2: ["Beautiful ", "Moments"],
    sub: "From quiet evenings to grand celebrations — set the mood with Lunelle.",
    image: productImages[3] ?? hero,
    layout: "center",
  },
];

const usp = [
  { Icon: FaLeaf, label: "Premium Ingredients" },
  { Icon: FaFire, label: "Long Lasting" },
  { Icon: FaHeart, label: "Handmade With Love" },
  { Icon: FaGem, label: "Eco Friendly" },
];

export default function Hero() {
  // Use the default static slides (no generator UI)
  const activeSlides = defaultSlides;

  return (
    <section className="relative overflow-hidden bg-gradient-luxury">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        
        className="h-[640px] md:h-[700px]"
      >
        {activeSlides.map((slide, idx) => {
          const isHeroImage = (slide as any).image === hero;
          // Force left-aligned content for consistent layout and responsiveness
          const outerClass = `relative mx-auto flex h-full max-w-7xl items-center px-6 md:px-10 justify-start`;
          const innerClass = `w-full md:w-1/2 lg:w-5/12 max-w-md md:max-w-lg lg:max-w-xl text-left`;
          return (
            <SwiperSlide key={idx}>
              <div className="relative h-full">
                {isHeroImage && (
                  <>
                    <div
                      aria-hidden
                      style={{ backgroundImage: `url(${(slide as any).image ?? hero})` }}
                      className="absolute inset-0 bg-cover bg-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-blush/20 to-transparent" />
                  </>
                )}

                <div className={outerClass}>
                  <div className={innerClass}>
                  <motion.div
                    key={`eye-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary"
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
                    className="font-display text-4xl leading-snug text-foreground md:text-6xl lg:text-7xl"
                  >
                    {slide.title[0]}
                    <span className="text-gradient-rose">{slide.title[1]}</span>
                    <br />
                    {slide.title2[0]}
                    <span className="text-gradient-rose">{slide.title2[1]}</span>
                  </motion.h1>

                  <motion.p
                    key={`s-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 max-w-md text-base text-foreground/75 md:text-lg lg:text-xl"
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

                {/* For non-hero slides render the right-side image panel */}
                {(!isHeroImage) && (
                  <div className="block md:absolute md:right-0 md:top-0 h-56 md:h-full w-full md:w-1/2 lg:w-7/12 z-20">
                      <img
                        aria-hidden
                        src={(slide as any).image ?? hero}
                        alt={String(slide.eyebrow ?? "banner")}
                        className="h-full w-full object-cover md:object-contain block"
                        style={{ minHeight: 160 }}
                      />
                  </div>
                )}

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
