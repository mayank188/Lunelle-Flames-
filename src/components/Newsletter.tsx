import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaCheck } from "react-icons/fa";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-rose px-8 py-14 text-center text-white shadow-luxury md:px-14"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-light">Stay in the glow</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Join the Lunelle Circle</h2>
            <p className="mx-auto mt-3 max-w-md text-white/80">
              Get 10% off your first order, early access to new launches, and rituals to romanticize your space.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60" />
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-full bg-white/95 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <button
                type="submit"
                disabled={done}
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-foreground/80"
              >
                {done ? (
                  <span className="flex items-center gap-2"><FaCheck /> Subscribed</span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
