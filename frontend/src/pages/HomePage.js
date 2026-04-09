import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BadgePercent, Award, Store, Truck } from "lucide-react";
import { CATEGORIES, STATS, WHY_CHOOSE_US } from "../data/products";

const ICON_MAP = { BadgePercent, Award, Store, Truck };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export default function HomePage() {
  return (
    <div data-testid="home-page">
      {/* Hero */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1765745518673-b562b7304a53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkYXJrJTIwbWFyYmxlfGVufDB8fHx8MTc3NTcyODg3M3ww&ixlib=rb-4.1.0&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-6"
            >
              Premium Hotel Supplies
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#F5F2F0] mb-6"
            >
              Elevate Every
              <br />
              <span className="text-[#8C7A6B]">Guest Experience</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-lg leading-relaxed text-[#B8B0AA] mb-10 max-w-lg"
            >
              Your one-stop wholesale partner for everything a hotel needs.
              From luxurious bedding to commercial kitchen equipment &mdash; 
              premium quality at unbeatable prices.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/products"
                data-testid="hero-browse-products"
                className="bg-[#5A4A4E] text-[#F5F2F0] hover:bg-[#705E63] px-8 py-4 rounded-none transition-all duration-300 font-medium tracking-wide text-center"
              >
                Browse Products
              </Link>
              <Link
                to="/contact"
                data-testid="hero-get-quote"
                className="bg-transparent text-[#F5F2F0] border border-[#5A4A4E] hover:border-[#8C7A6B] hover:bg-[#1A1617] px-8 py-4 rounded-none transition-all duration-300 font-medium tracking-wide text-center"
              >
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A817C]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#8C7A6B] to-transparent" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1A1617] border-y border-[#5A4A4E]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-testid="stats-section">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-3xl sm:text-4xl text-[#F5F2F0] mb-1">{stat.value}</p>
                <p className="text-xs tracking-[0.15em] uppercase text-[#8A817C]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories - Bento Grid */}
      <section className="py-24 sm:py-32" data-testid="categories-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-4">What We Supply</p>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-[#F5F2F0]">
              Complete Hotel Solutions
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5">
            {/* Large - Guest Room */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="md:col-span-5 lg:col-span-8 row-span-2"
            >
              <CategoryCard category={CATEGORIES[0]} large />
            </motion.div>

            {/* Housekeeping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3 lg:col-span-4"
            >
              <CategoryCard category={CATEGORIES[1]} />
            </motion.div>

            {/* Kitchen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 lg:col-span-4"
            >
              <CategoryCard category={CATEGORIES[2]} />
            </motion.div>

            {/* Front Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-4 lg:col-span-4"
            >
              <CategoryCard category={CATEGORIES[3]} />
            </motion.div>

            {/* Safety */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-4 lg:col-span-4"
            >
              <CategoryCard category={CATEGORIES[4]} />
            </motion.div>

            {/* Outdoor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-4 lg:col-span-4"
            >
              <CategoryCard category={CATEGORIES[5]} />
            </motion.div>

            {/* Consumables - wide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="md:col-span-8 lg:col-span-12"
            >
              <CategoryCard category={CATEGORIES[6]} wide />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/products"
              data-testid="view-all-products"
              className="inline-flex items-center gap-2 text-[#8C7A6B] hover:text-[#F5F2F0] transition-colors text-sm tracking-wide"
            >
              View All Products <ArrowRight strokeWidth={1} size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-[#1A1617]" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-4">Why Suite Essentials</p>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-[#F5F2F0]">
              Built for Hospitality
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  data-testid={`why-${item.title.toLowerCase().replace(/\s/g, "-")}`}
                  className="bg-[#251F21] border border-[#5A4A4E]/30 p-8 transition-colors duration-300 hover:border-[#8C7A6B]/50 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-[#8C7A6B]/40 mb-6 group-hover:bg-[#5A4A4E]/20 transition-colors">
                    {Icon && <Icon strokeWidth={1} size={24} className="text-[#8C7A6B]" />}
                  </div>
                  <h3 className="font-heading text-xl text-[#F5F2F0] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#B8B0AA] leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-[#F5F2F0] mb-6">
              Ready to Furnish Your Property?
            </h2>
            <p className="text-base text-[#B8B0AA] mb-10 max-w-lg mx-auto">
              Get in touch for a customized wholesale quote tailored to your hotel's needs.
              Our team is ready to help you set up or upgrade your property.
            </p>
            <Link
              to="/contact"
              data-testid="cta-get-quote"
              className="inline-block bg-[#5A4A4E] text-[#F5F2F0] hover:bg-[#705E63] px-10 py-4 rounded-none transition-all duration-300 font-medium tracking-wide"
            >
              Request a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ category, large, wide }) {
  const height = large ? "h-[500px]" : wide ? "h-[200px]" : "h-[240px]";
  return (
    <Link
      to={`/products#${category.id}`}
      data-testid={`category-card-${category.id}`}
      className={`category-card block relative group ${height} bg-[#1A1617] border border-[#5A4A4E]/30 overflow-hidden transition-colors duration-300 hover:border-[#8C7A6B]/50`}
    >
      <img
        src={category.image}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-10">
        <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-2">{category.tagline}</p>
        <h3 className={`font-heading text-[#F5F2F0] ${large ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
          {category.title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-[#8C7A6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs tracking-wide">Explore</span>
          <ArrowRight strokeWidth={1} size={14} />
        </div>
      </div>
    </Link>
  );
}
