import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_suite-essentials-hub/artifacts/518jzztr_2.png";

const VALUES = [
  {
    icon: Target,
    title: "Quality First",
    description: "We source only from manufacturers who meet international hospitality standards. Every product is tested for durability."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Straightforward wholesale pricing with no hidden costs. What you see is what you pay."
  },
  {
    icon: Heart,
    title: "Dedicated Service",
    description: "A dedicated account manager for every client ensures personalized support from order to delivery."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We grow when your property thrives. Our long-term relationships with hotels are built on trust."
  }
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* Hero */}
      <section className="pt-32 pb-20 sm:pb-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-4">About Us</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-[#F5F2F0] mb-6">
                The Story Behind
                <br />
                <span className="text-[#8C7A6B]">Suite Essentials</span>
              </h1>
              <p className="text-base sm:text-lg text-[#B8B0AA] leading-relaxed max-w-xl">
                We started Suite Essentials with a simple observation &mdash; hotels spend 
                countless hours sourcing supplies from multiple vendors, dealing with inconsistent 
                quality and pricing. We set out to change that.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 border border-[#5A4A4E]/30 flex items-center justify-center bg-[#1A1617]">
                  <img
                    src={LOGO_URL}
                    alt="Suite Essentials"
                    className="w-48 h-48 sm:w-60 sm:h-60 object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#8C7A6B]/20 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32 bg-[#1A1617]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[400px] sm:h-[500px] overflow-hidden border border-[#5A4A4E]/30">
                <img
                  src="https://images.unsplash.com/photo-1774921676536-12e96b39238c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZGVza3xlbnwwfHx8fDE3NzU3Mjg4ODB8MA&ixlib=rb-4.1.0&q=85"
                  alt="Hotel Lobby"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1617]/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-4">Our Mission</p>
              <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-[#F5F2F0] mb-6">
                One Partner, Complete Solutions
              </h2>
              <div className="space-y-4 text-[#B8B0AA] text-sm sm:text-base leading-relaxed">
                <p>
                  Suite Essentials was born from the real challenges faced by hotel owners 
                  and property managers across India. Sourcing hundreds of items from dozens 
                  of vendors leads to quality inconsistencies, delayed deliveries, and inflated costs.
                </p>
                <p>
                  We bridge this gap by becoming your single point of contact for every hotel 
                  supply category &mdash; from the sheets on your beds to the fire extinguishers 
                  on your walls. Our direct relationships with manufacturers allow us to offer 
                  wholesale pricing without compromising on quality.
                </p>
                <p>
                  Whether you are opening a new boutique hotel or upgrading an established 
                  property, Suite Essentials provides a comprehensive, hassle-free procurement 
                  experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32 bg-[#0A0A0A]" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-4">Our Values</p>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-[#F5F2F0]">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`value-${value.title.toLowerCase().replace(/\s/g, "-")}`}
                className="bg-[#1A1617] border border-[#5A4A4E]/30 p-8 transition-colors duration-300 hover:border-[#8C7A6B]/50"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-[#8C7A6B]/40 mb-6">
                  <value.icon strokeWidth={1} size={24} className="text-[#8C7A6B]" />
                </div>
                <h3 className="font-heading text-xl text-[#F5F2F0] mb-3">{value.title}</h3>
                <p className="text-sm text-[#B8B0AA] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-[#251F21]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="divider-gold mx-auto mb-8" />
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-[#F5F2F0] mb-6">
            Let's Work Together
          </h2>
          <p className="text-base text-[#B8B0AA] mb-8 max-w-lg mx-auto">
            Ready to streamline your hotel procurement? Get in touch with us today.
          </p>
          <Link
            to="/contact"
            data-testid="about-cta-quote"
            className="inline-block bg-[#5A4A4E] text-[#F5F2F0] hover:bg-[#705E63] px-10 py-4 rounded-none transition-all duration-300 font-medium tracking-wide"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
