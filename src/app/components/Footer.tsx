"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart,
  Mail,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { mail, name, phone } from "../data";
import { useState } from "react";
import { toast } from "react-toastify";

const Footer = () => {
  // Social media links data
  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/nutrilifestylehub?igsh=MThtd2EyMW9zeGMzbQ==",
      label: "Instagram",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/afreen-choudhary-703986301?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0NWJuVYmQQu1U0%2FHbnzI7A%3D%3D",
      label: "LinkedIn",
      gradient: "from-blue-600 to-blue-500",
    },
    // {
    //   icon: <Facebook className="w-5 h-5" />,
    //   href: "https://www.facebook.com/Nutrilifestylehub",
    //   label: "Facebook",
    //   gradient: "from-blue-600 to-blue-500",
    // },
    // {
    //   icon: <Twitter className="w-5 h-5" />,
    //   href: "https://www.twitter.com/Nutrilifestylehub",
    //   label: "Twitter",
    //   gradient: "from-sky-500 to-blue-500",
    // },
    // {
    //   icon: <Youtube className="w-5 h-5" />,
    //   href: "https://www.youtube.com/Nutrilifestylehub",
    //   label: "YouTube",
    //   gradient: "from-red-600 to-red-500",
    // },
  ];

  // Quick links data
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  // Services data
  const services = [
    "Weight Management",
    "Diabetes Care",
    "PCOS/PCOD Diet",
    "Sports Nutrition",
    "Family Nutrition",
    "Online Consultations",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/msufiyanhusen@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            _subject: "New Newsletter Subscription",
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        toast.success("Subscription successful! 🎉");
        setEmail("");
      } else {
        toast.error("Oops! Something went wrong.");
      }
    } catch {
      toast.error("Subscription failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                Nutrilifestylehub
              </h3>
              <h4 className="text-xl text-white mb-4">{name}</h4>
              <p className="text-gray-300 leading-relaxed">
                Transforming lives through personalized nutrition and
                sustainable lifestyle changes. Your journey to better health
                starts here.
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-left group flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-300 flex items-center group"
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Contact Info
              </h4>
              <div className="space-y-4 text-gray-300">
                {/* Email */}
                <div className="flex items-center group">
                  <Mail className="w-4 h-4 mr-3 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href={`mailto:${mail}`}
                    className="group-hover:text-white transition-colors duration-300"
                  >
                    {mail}
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center group">
                  <div className="w-4 h-4 mr-3 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    📞
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className="group-hover:text-white transition-colors duration-300"
                  >
                    {phone}
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center group">
                  <div className="w-4 h-4 mr-3 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    📍
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Mumbai, Maharashtra
                  </span>
                </div>

                {/* Hours */}
                <div className="flex items-center group">
                  <div className="w-4 h-4 mr-3 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    🕒
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Mon-Fri: 9AM - 6PM
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-green-800/50 to-emerald-800/50 rounded-2xl p-6 backdrop-blur-sm border border-green-700/30">
              <h5 className="text-lg font-semibold text-white mb-2">
                Stay Updated
              </h5>
              <p className="text-gray-300 text-sm mb-4">
                Get nutrition tips & healthy recipes delivered to your inbox
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleInputChange}
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
                © {currentYear} Nutrilifestylehub. All rights reserved. Made
                with
                <Heart className="w-4 h-4 mx-2 text-red-500 fill-current animate-pulse" />
                for healthier lives.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 relative group"
              >
                Privacy Policy
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 relative group"
              >
                Terms of Service
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link
                href="/disclaimer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 relative group"
              >
                Disclaimer
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 pt-8 pb-20 md:pb-0 border-t border-gray-800">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Professional nutrition guidance provided for informational and
            educational purposes. Always consult with your healthcare provider
            before making significant dietary changes, especially if you have
            pre-existing medical conditions or are taking medications.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
    </footer>
  );
};

export default Footer;
