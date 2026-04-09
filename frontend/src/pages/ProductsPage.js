import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bed, SprayCan, ChefHat, BellRing, ShieldCheck, TreePine, Package,
  ArrowRight, ChevronRight
} from "lucide-react";
import { CATEGORIES } from "../data/products";

const ICON_MAP = { Bed, SprayCan, ChefHat, BellRing, ShieldCheck, TreePine, Package };

export default function ProductsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div data-testid="products-page">
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pb-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-4">Our Catalog</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-[#F5F2F0] mb-6">
              Product Categories
            </h1>
            <p className="text-base sm:text-lg text-[#B8B0AA] max-w-2xl leading-relaxed">
              Explore our comprehensive range of hotel supplies. Every category is curated to meet 
              the highest standards of hospitality, available at wholesale prices.
            </p>
          </motion.div>

          {/* Quick Nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
            data-testid="category-quick-nav"
          >
            {CATEGORIES.map((cat) => {
              const Icon = ICON_MAP[cat.icon];
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  data-testid={`quick-nav-${cat.id}`}
                  className="flex items-center gap-2 px-4 py-2 border border-[#5A4A4E]/40 hover:border-[#8C7A6B] text-sm text-[#B8B0AA] hover:text-[#F5F2F0] transition-all duration-300"
                >
                  {Icon && <Icon strokeWidth={1} size={14} className="text-[#8C7A6B]" />}
                  {cat.title}
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {CATEGORIES.map((category, catIndex) => {
        const Icon = ICON_MAP[category.icon];
        return (
          <section
            key={category.id}
            id={category.id}
            data-testid={`category-section-${category.id}`}
            className={`py-20 sm:py-24 ${catIndex % 2 === 0 ? "bg-[#0A0A0A]" : "bg-[#1A1617]"}`}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-5"
                >
                  <div className="relative h-[300px] sm:h-[400px] overflow-hidden border border-[#5A4A4E]/30">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                    <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center border border-[#8C7A6B]/40 bg-[#0A0A0A]/60 backdrop-blur-sm">
                      {Icon && <Icon strokeWidth={1} size={24} className="text-[#8C7A6B]" />}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-7"
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-3">{category.tagline}</p>
                  <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-[#F5F2F0] mb-8">
                    {category.title}
                  </h2>

                  <div className="space-y-6">
                    {category.subcategories.map((sub) => (
                      <div key={sub.name}>
                        <h3 className="text-sm font-medium tracking-wide text-[#F5F2F0] mb-3 flex items-center gap-2">
                          <ChevronRight strokeWidth={1} size={14} className="text-[#8C7A6B]" />
                          {sub.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 ml-6">
                          {sub.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs px-3 py-1.5 border border-[#5A4A4E]/30 text-[#B8B0AA] hover:border-[#8C7A6B]/50 hover:text-[#F5F2F0] transition-colors cursor-default"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      data-testid={`quote-${category.id}`}
                      className="inline-flex items-center gap-2 text-[#8C7A6B] hover:text-[#F5F2F0] transition-colors text-sm tracking-wide"
                    >
                      Request Quote for {category.title}
                      <ArrowRight strokeWidth={1} size={14} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="py-20 sm:py-24 bg-[#251F21]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="divider-gold mx-auto mb-8" />
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-[#F5F2F0] mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-base text-[#B8B0AA] mb-8 max-w-lg mx-auto">
            We create tailored supply packages based on your property size, budget, and requirements.
          </p>
          <Link
            to="/contact"
            data-testid="products-cta-quote"
            className="inline-block bg-[#5A4A4E] text-[#F5F2F0] hover:bg-[#705E63] px-10 py-4 rounded-none transition-all duration-300 font-medium tracking-wide"
          >
            Get Your Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
