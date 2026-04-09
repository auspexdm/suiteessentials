import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_suite-essentials-hub/artifacts/518jzztr_2.png";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Get a Quote" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-header border-b border-[#5A4A4E]/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" data-testid="logo-link" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Suite Essentials"
              className="h-12 w-12 object-contain"
            />
            <span className="font-heading text-lg text-[#F5F2F0] tracking-wide hidden sm:block">
              Suite Essentials
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`text-sm tracking-[0.12em] uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-[#8C7A6B]"
                    : "text-[#B8B0AA] hover:text-[#F5F2F0]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919270438355"
              data-testid="nav-phone-btn"
              className="hidden md:flex items-center gap-2 text-sm text-[#8C7A6B] hover:text-[#F5F2F0] transition-colors"
            >
              <Phone strokeWidth={1} size={16} />
              <span>+91 92704 38355</span>
            </a>

            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#F5F2F0]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-[#5A4A4E]/30"
            data-testid="mobile-menu"
          >
            <nav className="px-6 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={`block text-base tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? "text-[#8C7A6B]"
                      : "text-[#B8B0AA] hover:text-[#F5F2F0]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919270438355"
                className="flex items-center gap-2 pt-4 border-t border-[#5A4A4E]/30 text-[#8C7A6B]"
              >
                <Phone strokeWidth={1} size={16} />
                <span>+91 92704 38355</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
