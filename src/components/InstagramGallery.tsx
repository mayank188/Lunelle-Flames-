import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { products } from "@/data/products";

export default function InstagramGallery() {
  const gallery = products.slice(0, 8);
  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">@lunelleflames.candles</span>
            <h2 className="mt-1 font-display text-3xl md:text-4xl">Follow Our Journey</h2>
          </div>
          <a
            href="https://instagram.com/lunelleflames.candles"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-card hover:scale-105 transition"
          >
            <FaInstagram /> Follow Us
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {gallery.map((p, i) => (
            <motion.a
              key={p.id}
              href="https://instagram.com/lunelleflames.candles"
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-white shadow-card"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-primary/0 transition group-hover:bg-primary/50">
                <FaInstagram className="h-7 w-7 text-white opacity-0 transition group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
