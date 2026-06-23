import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useCart, buildWhatsAppCheckoutUrl } from "@/context/CartContext";

export default function CartDrawer() {
  const { isOpen, closeCart, items, total, updateQty, removeItem } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-background shadow-luxury"
          >
            <header className="flex items-center justify-between border-b border-border bg-gradient-luxury px-6 py-4">
              <h2 className="font-display text-2xl">Your Cart ({items.length})</h2>
              <button onClick={closeCart} aria-label="Close cart">
                <FiX className="h-5 w-5" />
              </button>
            </header>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-secondary text-primary text-3xl">
                  🕯️
                </div>
                <h3 className="mt-4 font-display text-xl">Your cart is empty</h3>
                <p className="mt-1 text-sm text-muted-foreground">Add some luxury to your space.</p>
                <button
                  onClick={closeCart}
                  className="mt-6 rounded-full bg-gradient-rose px-6 py-2.5 text-sm font-medium text-white"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto p-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 rounded-xl bg-secondary/60 p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 shrink-0 rounded-lg object-cover"
                      />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h4 className="truncate font-display text-base">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">{item.scent}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label="Remove"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-border bg-white">
                            <button
                              onClick={() => updateQty(item.id, item.quantity - 1)}
                              className="grid h-7 w-7 place-items-center text-primary"
                              aria-label="Decrease"
                            >
                              <FiMinus className="h-3 w-3" />
                            </button>
                            <span className="w-5 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQty(item.id, item.quantity + 1)}
                              className="grid h-7 w-7 place-items-center text-primary"
                              aria-label="Increase"
                            >
                              <FiPlus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="font-display font-semibold text-primary">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <footer className="space-y-3 border-t border-border bg-secondary/40 px-6 py-5">
                  <div className="flex items-center justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-medium">₹{total}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg">Total</span>
                    <span className="font-display text-2xl font-bold text-primary">₹{total}</span>
                  </div>
                  <a
                    href={buildWhatsAppCheckoutUrl(items, total)}
                    target="_blank"
                    rel="noopener"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-luxury hover:bg-green-600"
                  >
                    <FaWhatsapp className="h-5 w-5" /> Checkout on WhatsApp
                  </a>
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="block rounded-full border border-primary py-2.5 text-center text-sm font-medium text-primary hover:bg-primary hover:text-white"
                  >
                    View Full Cart
                  </Link>
                </footer>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
