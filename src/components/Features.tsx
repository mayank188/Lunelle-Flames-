import { motion } from "framer-motion";
import { FaLeaf, FaHandHoldingHeart, FaSprayCan, FaSeedling, FaFire, FaMapMarkerAlt } from "react-icons/fa";

const features = [
  { Icon: FaLeaf, title: "100% Soy Wax", desc: "Natural & clean burning" },
  { Icon: FaHandHoldingHeart, title: "Handmade", desc: "Poured in small batches" },
  { Icon: FaSprayCan, title: "Premium Fragrance", desc: "Luxury fragrance oils" },
  { Icon: FaSeedling, title: "Eco Friendly", desc: "Cruelty-free & vegan" },
  { Icon: FaFire, title: "Long Lasting", desc: "Up to 45 hour burn time" },
  { Icon: FaMapMarkerAlt, title: "Made in India", desc: "Proudly local" },
];

export default function Features() {
  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-3 lg:grid-cols-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-2 grid h-12 w-12 place-items-center rounded-full bg-white text-primary shadow-card">
              <f.Icon className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
