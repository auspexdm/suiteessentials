import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { CATEGORIES } from "../data/products";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    hotel_name: "",
    city: "",
    categories: [],
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleCategory = (id) => {
    setForm((prev) => ({
      ...prev,
      categories: prev.categories.includes(id)
        ? prev.categories.filter((c) => c !== id)
        : [...prev.categories, id]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await axios.post(`${API}/inquiries`, form);
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div data-testid="contact-page" className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-6"
        >
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#8C7A6B]/40">
            <CheckCircle strokeWidth={1} size={32} className="text-[#8C7A6B]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F2F0] mb-4">Thank You</h2>
          <p className="text-[#B8B0AA] max-w-md mx-auto mb-8">
            We have received your inquiry. Our team will get back to you within 24 hours 
            with a customized quote for your property.
          </p>
          <button
            data-testid="submit-another-btn"
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", phone: "", hotel_name: "", city: "", categories: [], message: "" });
            }}
            className="text-sm text-[#8C7A6B] hover:text-[#F5F2F0] transition-colors tracking-wide"
          >
            Submit Another Inquiry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div data-testid="contact-page">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] mb-4">Get in Touch</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-[#F5F2F0] mb-6">
              Request a Quote
            </h1>
            <p className="text-base sm:text-lg text-[#B8B0AA] max-w-2xl leading-relaxed">
              Tell us about your property and requirements. We will prepare a customized 
              wholesale quote tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-[#B8B0AA] mb-2 block font-medium">
                      Your Name <span className="text-[#8C7A6B]">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      data-testid="input-name"
                      className="bg-[#1A1617] border border-[#5A4A4E]/50 focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] rounded-none text-[#F5F2F0] p-4 w-full placeholder-[#8A817C] transition-colors outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#B8B0AA] mb-2 block font-medium">
                      Email Address <span className="text-[#8C7A6B]">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                      className="bg-[#1A1617] border border-[#5A4A4E]/50 focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] rounded-none text-[#F5F2F0] p-4 w-full placeholder-[#8A817C] transition-colors outline-none"
                      placeholder="john@hotel.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-[#B8B0AA] mb-2 block font-medium">Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      data-testid="input-phone"
                      className="bg-[#1A1617] border border-[#5A4A4E]/50 focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] rounded-none text-[#F5F2F0] p-4 w-full placeholder-[#8A817C] transition-colors outline-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#B8B0AA] mb-2 block font-medium">Hotel / Property Name</label>
                    <input
                      name="hotel_name"
                      value={form.hotel_name}
                      onChange={handleChange}
                      data-testid="input-hotel-name"
                      className="bg-[#1A1617] border border-[#5A4A4E]/50 focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] rounded-none text-[#F5F2F0] p-4 w-full placeholder-[#8A817C] transition-colors outline-none"
                      placeholder="The Grand Hotel"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#B8B0AA] mb-2 block font-medium">City</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    data-testid="input-city"
                    className="bg-[#1A1617] border border-[#5A4A4E]/50 focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] rounded-none text-[#F5F2F0] p-4 w-full placeholder-[#8A817C] transition-colors outline-none"
                    placeholder="Mumbai"
                  />
                </div>

                {/* Category Selection */}
                <div>
                  <label className="text-sm text-[#B8B0AA] mb-3 block font-medium">
                    Categories of Interest
                  </label>
                  <div className="flex flex-wrap gap-2" data-testid="category-selection">
                    {CATEGORIES.map((cat) => (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => toggleCategory(cat.id)}
                        data-testid={`cat-toggle-${cat.id}`}
                        className={`text-xs px-4 py-2 border transition-all duration-300 ${
                          form.categories.includes(cat.id)
                            ? "border-[#8C7A6B] bg-[#5A4A4E]/30 text-[#F5F2F0]"
                            : "border-[#5A4A4E]/40 text-[#B8B0AA] hover:border-[#8C7A6B]/60"
                        }`}
                      >
                        {cat.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#B8B0AA] mb-2 block font-medium">
                    Message <span className="text-[#8C7A6B]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    data-testid="input-message"
                    className="bg-[#1A1617] border border-[#5A4A4E]/50 focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] rounded-none text-[#F5F2F0] p-4 w-full placeholder-[#8A817C] transition-colors outline-none resize-none"
                    placeholder="Tell us about your property, number of rooms, and specific requirements..."
                  />
                </div>

                {error && (
                  <p data-testid="form-error" className="text-sm text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="submit-inquiry-btn"
                  className="bg-[#5A4A4E] text-[#F5F2F0] hover:bg-[#705E63] px-10 py-4 rounded-none transition-all duration-300 font-medium tracking-wide flex items-center gap-3 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 strokeWidth={1} size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send strokeWidth={1} size={18} />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="bg-[#1A1617] border border-[#5A4A4E]/30 p-8 space-y-8">
                <div>
                  <h3 className="font-heading text-xl text-[#F5F2F0] mb-6">Contact Information</h3>
                  <div className="divider-gold mb-6" />
                </div>

                <a
                  href="tel:+919270438355"
                  data-testid="contact-phone"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[#8C7A6B]/40 flex-shrink-0 group-hover:bg-[#5A4A4E]/20 transition-colors">
                    <Phone strokeWidth={1} size={18} className="text-[#8C7A6B]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8A817C] mb-1">Phone</p>
                    <p className="text-sm text-[#F5F2F0]">+91 92704 38355</p>
                  </div>
                </a>

                <a
                  href="mailto:essentialssuite@gmail.com"
                  data-testid="contact-email"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[#8C7A6B]/40 flex-shrink-0 group-hover:bg-[#5A4A4E]/20 transition-colors">
                    <Mail strokeWidth={1} size={18} className="text-[#8C7A6B]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8A817C] mb-1">Email</p>
                    <p className="text-sm text-[#F5F2F0]">essentialssuite@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#8C7A6B]/40 flex-shrink-0">
                    <MapPin strokeWidth={1} size={18} className="text-[#8C7A6B]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8A817C] mb-1">Serving</p>
                    <p className="text-sm text-[#F5F2F0]">Pan-India Delivery</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#5A4A4E]/20">
                  <p className="text-xs text-[#8A817C] mb-2">Business Hours</p>
                  <p className="text-sm text-[#B8B0AA]">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-sm text-[#B8B0AA]">Sun: By Appointment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
