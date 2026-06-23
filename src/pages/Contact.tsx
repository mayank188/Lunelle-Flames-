import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  useEffect(() => { document.title = "Contact — Lunelle Flames"; }, []);
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-gradient-luxury py-16 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Get In Touch</span>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          We'd love to hear from you — custom orders, collaborations, or just to say hi.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {[
            { Icon: FiPhone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
            { Icon: FiMail, label: "Email", value: "hello@lunelleflames.com", href: "mailto:hello@lunelleflames.com" },
            { Icon: FiMapPin, label: "Location", value: "Delhi, India" },
            { Icon: FaInstagram, label: "Instagram", value: "@lunelleflames.candles", href: "https://instagram.com/lunelleflames.candles" },
            { Icon: FaWhatsapp, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/919999999999" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href ?? "#"}
              className="flex items-center gap-4 rounded-2xl bg-secondary p-5 transition hover:shadow-card"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-rose text-white">
                <Icon />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="font-medium text-foreground">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl bg-white p-8 shadow-card"
        >
          <h2 className="font-display text-3xl">Send us a message</h2>
          <div className="mt-6 grid gap-4">
            <input required placeholder="Your name" className="rounded-xl bg-secondary px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <input required type="email" placeholder="Your email" className="rounded-xl bg-secondary px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <input placeholder="Phone (optional)" className="rounded-xl bg-secondary px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <textarea required rows={5} placeholder="How can we help?" className="rounded-xl bg-secondary px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <button className="rounded-full bg-gradient-rose px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-luxury hover:scale-[1.02] transition">
              {sent ? "Thank you — we'll be in touch ✦" : "Send Message"}
            </button>
          </div>
        </motion.form>
      </section>
    </>
  );
}
