import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaHeart } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import logo from "@/assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-br from-[#c66478] to-[#a84d62] text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Lunelle Flames" className="h-14 w-14 rounded-full ring-2 ring-white/40 object-cover" />
            <div>
              <h3 className="font-display text-2xl text-white">Lunelle</h3>
              <p className="text-xs tracking-[0.3em] text-gold-light">FLAMES</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Handcrafted candles to elevate your space and every moment. Light • Love • Luxury.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: FaInstagram, href: "https://instagram.com/lunelleflames.candles" },
              { Icon: FaWhatsapp, href: "https://wa.me/919999999999" },
              { Icon: FaFacebookF, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg uppercase tracking-wider text-gold-light">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "/", "Shop", "/shop", "Collections", "/collections", "About", "/about", "Contact", "/contact"].reduce<
              { label: string; to: string }[]
            >((acc, _, i, arr) => {
              if (i % 2 === 0) acc.push({ label: arr[i], to: arr[i + 1] });
              return acc;
            }, []).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg uppercase tracking-wider text-gold-light">Customer Care</h4>
          <ul className="space-y-2 text-sm">
            {["Shipping Policy", "Return Policy", "Terms & Conditions", "Privacy Policy", "FAQs"].map((l) => (
              <li key={l}>
                <a href="#" className="transition hover:text-gold-light">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg uppercase tracking-wider text-gold-light">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FiPhone className="mt-0.5 shrink-0 text-gold-light" /> +91 99999 99999
            </li>
            <li className="flex items-start gap-2">
              <FiMail className="mt-0.5 shrink-0 text-gold-light" /> hello@lunelleflames.com
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 shrink-0 text-gold-light" /> Delhi, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs md:flex-row">
          <p>© 2026 Lunelle Flames. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-gold-light" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
