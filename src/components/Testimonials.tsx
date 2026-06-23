import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  { name: "Aanya Mehra", city: "Mumbai", text: "Absolutely stunning candles! The Pink Velvet Bliss is my new evening ritual. The fragrance lingers beautifully." },
  { name: "Riya Kapoor", city: "Delhi", text: "Gifted the Floral Heart to my mom. She cried. The packaging, the scent, the craftsmanship — pure luxury." },
  { name: "Saanvi Singh", city: "Bangalore", text: "I have tried many premium candle brands, but Lunelle Flames is unmatched. Clean burn, gorgeous design." },
  { name: "Ishita Patel", city: "Pune", text: "The White Oud is divine. My home smells like a 5-star spa. Will be ordering again and again." },
  { name: "Tara Sharma", city: "Hyderabad", text: "Customer service was so warm and personal. The candles arrived perfectly wrapped — felt like opening a love letter." },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-luxury py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Loved by</span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">Our Community</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          className="mt-12 !pb-14"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <motion.article
                whileHover={{ y: -6 }}
                className="h-full rounded-2xl bg-white p-7 shadow-card"
              >
                <FaQuoteLeft className="h-7 w-7 text-gold/40" />
                <div className="mt-3 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-foreground/80">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rose font-display text-white">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.city}</p>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
