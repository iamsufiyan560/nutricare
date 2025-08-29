"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const aboutEl = document.getElementById("about");

    const handleScroll = () => {
      if (!aboutEl) return;
      const aboutTop = aboutEl.offsetTop;
      setVisible(window.scrollY > aboutTop - 50); // show after reaching About
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      title="Scroll to top"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </button>
  );
}
