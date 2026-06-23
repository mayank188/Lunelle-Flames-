import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaStar, FaLeaf, FaHeart, FaFire } from "react-icons/fa";
import { FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import ProductCard from "@/components/ProductCard";
import { products, getProductBySlug } from "@/data/products";
import { useCart, buildWhatsAppCheckoutUrl } from "@/context/CartContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : null;
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) document.title = `${product.name} — Lunelle Flames`;
  }, [product]);

  if (!product) return <Navigate to="/shop" replace />;

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const buyNowUrl = buildWhatsAppCheckoutUrl([{ ...product, quantity: qty }], product.price * qty);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="aspect-square overflow-hidden rounded-3xl bg-secondary shadow-luxury">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.image, product.image, product.image].map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl bg-secondary ring-2 ring-transparent hover:ring-primary cursor-pointer">
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">{product.category}</span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} className="h-4 w-4" />)}
              </div>
              <span className="text-xs text-muted-foreground">128 reviews</span>
            </div>
            <p className="mt-6 font-display text-4xl text-primary">₹{product.price}</p>
            <p className="mt-5 leading-relaxed text-foreground/75">{product.description}</p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { Icon: FaLeaf, label: "Soy Wax", value: "100%" },
                { Icon: FaFire, label: "Burn Time", value: product.burnTime },
                { Icon: FaHeart, label: "Scent", value: product.scent.split(" ")[0] },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="rounded-xl bg-secondary p-3 text-center">
                  <Icon className="mx-auto mb-1 text-primary" />
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-border bg-white">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-10 w-10 place-items-center text-primary">
                  <FiMinus />
                </button>
                <span className="w-8 text-center font-medium">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-10 w-10 place-items-center text-primary">
                  <FiPlus />
                </button>
              </div>
              <button
                onClick={() => addItem(product, qty)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-rose px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-luxury hover:scale-[1.02] transition"
              >
                <FiShoppingBag /> Add to Cart
              </button>
            </div>
            <a
              href={buyNowUrl}
              target="_blank"
              rel="noopener"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-green-600"
            >
              <FaWhatsapp /> Buy on WhatsApp
            </a>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>✦ Free delivery on orders above ₹999</li>
              <li>✦ Hand-poured in Delhi, India</li>
              <li>✦ Cruelty-free & vegan</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center font-display text-3xl md:text-4xl">You may also love</h2>
            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
