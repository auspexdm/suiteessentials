import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_suite-essentials-hub/artifacts/518jzztr_2.png";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#0A0A0A] border-t border-[#5A4A4E]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO_URL} alt="Suite Essentials" className="h-14 w-14 object-contain" />
              <div>
                <h3 className="font-heading text-xl text-[#F5F2F0]">Suite Essentials</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B]">Hotel Supplies</p>
              </div>
            </div>
            <p className="text-[#B8B0AA] text-sm leading-relaxed max-w-sm">
              Your trusted wholesale partner for premium hotel essentials. 
              From guest rooms to kitchens, we supply everything your property needs 
              to deliver an exceptional hospitality experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "About Us", path: "/about" },
                { label: "Request a Quote", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-sm text-[#B8B0AA] hover:text-[#F5F2F0] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919270438355"
                  data-testid="footer-phone"
                  className="flex items-start gap-3 text-sm text-[#B8B0AA] hover:text-[#F5F2F0] transition-colors"
                >
                  <Phone strokeWidth={1} size={16} className="mt-0.5 flex-shrink-0 text-[#8C7A6B]" />
                  +91 92704 38355
                </a>
              </li>
              <li>
                <a
                  href="mailto:essentialssuite@gmail.com"
                  data-testid="footer-email"
                  className="flex items-start gap-3 text-sm text-[#B8B0AA] hover:text-[#F5F2F0] transition-colors"
                >
                  <Mail strokeWidth={1} size={16} className="mt-0.5 flex-shrink-0 text-[#8C7A6B]" />
                  essentialssuite@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#B8B0AA]">
                <MapPin strokeWidth={1} size={16} className="mt-0.5 flex-shrink-0 text-[#8C7A6B]" />
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#5A4A4E]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8A817C]">
            &copy; {new Date().getFullYear()} Suite Essentials. All rights reserved.
          </p>
          <p className="text-xs text-[#8A817C]">
            Premium Hotel Supplies at Wholesale Prices
          </p>
        </div>
      </div>
    </footer>
  );
}
