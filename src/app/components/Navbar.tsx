"use client";
import { useEffect, useState } from "react";
import { House, CircleUser, CreditCard, Star, Send } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home", icon: House },
    { href: "#about", label: "About", icon: CircleUser },
    { href: "#pricing", label: "Pricing", icon: CreditCard },
    { href: "#testimonials", label: "Testimonials", icon: Star },
    { href: "#contact", label: "Contact", icon: Send },
  ];

  // Smooth scroll when clicked
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.substring(1));
    }
  };

  // Track active section on manual scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home"; // default section
      for (let link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = link.href.substring(1);
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h2 className="text-xl md:text-2xl font-bold text-green-600">
                NutriCare
              </h2>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-100 rounded-full px-8 py-3 flex items-center space-x-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-sm font-medium transition-colors duration-200
                      ${
                        activeSection === link.href.substring(1)
                          ? "text-green-600"
                          : "text-gray-700 hover:text-green-600"
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center py-2">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive = activeSection === link.href.substring(1);

            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`flex flex-col items-center justify-center p-3 transition-all duration-200
                  ${isActive ? "text-green-600" : "text-gray-500"}`}
              >
                <IconComponent
                  size={20}
                  className={isActive ? "stroke-2" : "stroke-1.5"}
                />
                <span className="text-xs mt-1 font-medium">{link.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
