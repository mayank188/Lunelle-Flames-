import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaLeaf, FaGem } from "react-icons/fa";
import hero from "@/assets/hero.jpg";
// logo removed: using a badge instead of image

export default function About() {
  useEffect(() => { document.title = "About — Lunelle Flames"; }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-luxury py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-primary to-gold ring-4 ring-gold/30 flex items-center justify-center text-white">
            <span className="text-2xl font-bold">LF</span>
          </div>
          <span className="mt-6 inline-block text-xs uppercase tracking-[0.3em] text-primary">
            Our Story
          </span>
          <h1 className="mt-2 font-display text-5xl md:text-6xl">Lunelle Flames</h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-foreground/75">
            Lunelle Flames creates handcrafted candles and home decor products made with love.
            Each piece is poured by hand in small batches in our Delhi studio, using 100% natural
            soy wax and luxury fragrance oils.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.img
            src={hero}
            alt="Lunelle Flames candles"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl object-cover shadow-luxury"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Mission</span>
            <h2 className="mt-2 font-display text-4xl">Light • Love • Luxury</h2>
            <p className="mt-5 leading-relaxed text-foreground/75">
              We believe candles aren't just decor — they're rituals. Tiny ceremonies that turn
              ordinary moments into extraordinary ones. Every Lunelle candle is designed to make
              your home feel more like you.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                { Icon: FaHeart, title: "Handcrafted with love", text: "Every wick, every pour, by hand." },
                { Icon: FaLeaf, title: "100% natural soy wax", text: "Vegan, cruelty-free, eco-friendly." },
                { Icon: FaGem, title: "Luxury quality", text: "Premium fragrance oils sourced globally." },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3 rounded-xl bg-secondary p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-rose text-white">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-rose py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-4xl md:text-5xl">Crafted to last. Made to be loved.</h2>
          <p className="mt-4 text-white/85">
            From custom orders to bulk gifting for weddings and brands — we'd love to create
            something special for you.
          </p>
        </div>
      </section>
    </>
  );
}
