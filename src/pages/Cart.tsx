import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart, buildWhatsAppCheckoutUrl } from "@/context/CartContext";

export default function Cart() {
  useEffect(() => { document.title = "Cart — Lunelle Flames"; }, []);
  const { items, total, updateQty, removeItem } = useCart();
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-secondary text-4xl">🕯️</div>
        <h1 className="mt-6 font-display text-4xl">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Add some luxury to your space.</p>
        <Link to="/shop" className="mt-8 inline-block rounded-full bg-gradient-rose px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-luxury">
          Start Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-display text-5xl">Your Cart</h1>
      <p className="mt-1 text-muted-foreground">{items.length} item(s)</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              className="flex gap-4 rounded-2xl bg-white p-4 shadow-card"
            >
              <img src={item.image} alt={item.name} className="h-28 w-28 shrink-0 rounded-xl object-cover" />
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <p className="text-xs text-muted-foreground">{item.scent}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-primary">{item.category}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-primary" aria-label="Remove">
                    <FiTrash2 />
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-border">
                    <button onClick={() => updateQty(item.id, item.quantity - 1)} className="grid h-8 w-8 place-items-center text-primary"><FiMinus className="h-3 w-3" /></button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.quantity + 1)} className="grid h-8 w-8 place-items-center text-primary"><FiPlus className="h-3 w-3" /></button>
                  </div>
                  <p className="font-display text-xl font-bold text-primary">₹{item.price * item.quantity}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <aside className="h-fit rounded-2xl bg-gradient-luxury p-6 shadow-card">
          <h2 className="font-display text-2xl">Order Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{total}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="text-green-600">{total > 999 ? "Free" : "₹49"}</span></div>
            <div className="my-3 h-px bg-border" />
            <div className="flex justify-between font-display text-xl"><span>Total</span><span className="text-primary">₹{total > 999 ? total : total + 49}</span></div>
          </div>

          <div className="mt-6 space-y-3">
            <input value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} placeholder="Your name" className="w-full rounded-xl bg-white px-4 py-2.5 text-sm outline-none" />
            <input value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} placeholder="Phone" className="w-full rounded-xl bg-white px-4 py-2.5 text-sm outline-none" />
            <textarea value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} rows={3} placeholder="Delivery address" className="w-full rounded-xl bg-white px-4 py-2.5 text-sm outline-none" />
          </div>

          <a
            href={buildWhatsAppCheckoutUrl(items, total, customer)}
            target="_blank"
            rel="noopener"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-luxury hover:bg-green-600"
          >
            <FaWhatsapp className="h-5 w-5" /> Checkout on WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            No payment gateway. Order details will be sent to our WhatsApp.
          </p>
        </aside>
      </div>
    </section>
  );
}
