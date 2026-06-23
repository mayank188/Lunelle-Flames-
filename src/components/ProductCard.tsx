import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiShoppingBag, FiEye } from "react-icons/fi";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 4) * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow hover:shadow-luxury"
    >
      <Link to={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
          <button
            aria-label="Quick view"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-primary shadow hover:bg-primary hover:text-white"
          >
            <FiEye className="h-4 w-4" />
          </button>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display text-lg text-foreground transition group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-muted-foreground">{product.scent}</p>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <span className="font-display text-xl font-semibold text-primary">₹{product.price}</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="flex items-center gap-1.5 rounded-full bg-gradient-rose px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white shadow-sm transition hover:shadow-luxury"
          >
            Add <FiShoppingBag className="h-3 w-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
