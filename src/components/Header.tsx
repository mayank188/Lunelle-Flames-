import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaHeart, FaTruck, FaGift } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Announcement bar */}
      <div className="hidden bg-gradient-rose py-2 text-xs text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <span className="flex items-center gap-2">
            <FaHeart className="text-gold-light" /> Handcrafted with Love
          </span>
          <span className="flex items-center gap-2">
            <FaTruck className="text-gold-light" /> Free Delivery Above ₹999
          </span>
          <span className="flex items-center gap-2">
            <FaGift className="text-gold-light" /> Custom & Bulk Orders Available
          </span>
        </div>
      </div>
      <div className="overflow-hidden bg-gradient-rose py-2 text-xs text-white md:hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-6 flex items-center gap-2"><FaHeart /> Handcrafted with Love</span>
          <span className="mx-6 flex items-center gap-2"><FaTruck /> Free Delivery Above ₹999</span>
          <span className="mx-6 flex items-center gap-2"><FaGift /> Custom & Bulk Orders</span>
          <span className="mx-6 flex items-center gap-2"><FaHeart /> Handcrafted with Love</span>
          <span className="mx-6 flex items-center gap-2"><FaTruck /> Free Delivery Above ₹999</span>
          <span className="mx-6 flex items-center gap-2"><FaGift /> Custom & Bulk Orders</span>
        </div>
      </div>

      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,249,249,0.95)" : "rgba(253,244,245,1)",
          boxShadow: scrolled
            ? "0 8px 30px -10px rgba(217,122,140,0.25)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        className="sticky top-0 z-40 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
          {/* Mobile menu */}
          <button
            className="text-foreground lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img
              src={logo}
              alt="Lunelle Flames"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40"
            />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-xl font-bold text-foreground">Lunelle</span>
              <span className="-mt-1 text-[10px] tracking-[0.3em] text-gold">FLAMES</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `group relative text-sm font-medium uppercase tracking-wider transition-colors ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-gold transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 md:gap-5">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-700 hover:bg-green-500/20 md:flex"
            >
              <FaWhatsapp className="h-4 w-4" /> +91 99999 99999
            </a>
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className="text-foreground hover:text-primary"
            >
              <FiSearch className="h-5 w-5" />
            </button>
            <button aria-label="Account" className="hidden text-foreground hover:text-primary md:block">
              <FiUser className="h-5 w-5" />
            </button>
            <button
              onClick={openCart}
              aria-label="Cart"
              className="relative text-foreground hover:text-primary"
            >
              <FiShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-rose text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border bg-secondary"
            >
              <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4">
                <FiSearch className="h-5 w-5 text-muted-foreground" />
                <input
                  autoFocus
                  placeholder="Search candles..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button onClick={() => setSearchOpen(false)}>
                  <FiX className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-y-0 left-0 z-50 w-72 bg-gradient-luxury p-6 shadow-luxury"
            >
              <div className="flex items-center justify-between">
                <img src={logo} alt="" className="h-10 w-10 rounded-full object-cover" />
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 font-display text-lg ${
                        isActive ? "bg-white/60 text-primary" : "text-foreground"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <a
                href="https://wa.me/919999999999"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-medium text-white"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
