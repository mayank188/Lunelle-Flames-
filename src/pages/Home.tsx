import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import Newsletter from "@/components/Newsletter";
import { products } from "@/data/products";

export default function Home() {
  useEffect(() => {
    document.title = "Lunelle Flames — Handcrafted Luxury Candles";
  }, []);

  const bestSellers = products.slice(0, 8);
  return (
    <>
      <Hero />
      <Features />

      {/* Best Sellers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Shop Our</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Best Sellers</h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold">✦</span>
              <span className="h-px w-12 bg-gold" />
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {bestSellers.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/shop"
              className="inline-block rounded-full border-2 border-primary px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary transition hover:bg-primary hover:text-white"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section className="relative overflow-hidden bg-gradient-rose py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold-light">Our Story</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Light • Love • Luxury</h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/85">
              Born from a love for slow rituals and beautiful moments, Lunelle Flames crafts each
              candle by hand in small batches — pouring care, intention, and luxury into every wick.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-gold hover:text-white"
            >
              Read Our Story
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {products.slice(1, 5).map((p, i) => (
              <motion.img
                key={p.id}
                src={p.image}
                alt={p.name}
                loading="lazy"
                whileHover={{ y: -8 }}
                className={`aspect-square w-full rounded-2xl object-cover shadow-luxury ${
                  i % 2 ? "translate-y-6" : ""
                }`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
