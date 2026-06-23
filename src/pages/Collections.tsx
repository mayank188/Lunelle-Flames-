import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";

export default function Collections() {
  useEffect(() => { document.title = "Collections — Lunelle Flames"; }, []);

  return (
    <>
      <section className="bg-gradient-luxury py-16 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Curated</span>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Our Collections</h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Discover candles thoughtfully grouped by mood, occasion, and ritual.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const items = products.filter((p) => p.category === cat);
            const cover = items[0]?.image;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to="/shop"
                  className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-card hover:shadow-luxury"
                >
                  {cover && (
                    <img
                      src={cover}
                      alt={cat}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <span className="text-xs uppercase tracking-[0.3em] text-gold-light">
                      {items.length} pieces
                    </span>
                    <h3 className="mt-2 font-display text-3xl">{cat}</h3>
                    <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs uppercase tracking-wider backdrop-blur">
                      Explore →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
