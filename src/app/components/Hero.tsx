// app/components/Hero.tsx
"use client";
import { ArrowRight } from "lucide-react";
import { name } from "../data";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className=" bg-gradient-to-br from-green-50 to-blue-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Personalized Diet Plans
            <span className="block text-green-600">That Work for You</span>
          </h1>

          {/* Name */}
          <p className="text-2xl text-gray-800 font-medium mb-4">{name}</p>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your health with customized nutrition plans designed for
            your lifestyle. Achieve sustainable weight management and discover
            the perfect balance between healthy eating and enjoying life.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
            <ArrowRight className="ml-2" size={20} />
          </button>

          {/* Features highlight */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personalized Plans
              </h3>
              <p className="text-gray-600">
                Tailored to your unique needs and preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sustainable Results
              </h3>
              <p className="text-gray-600">
                Long-term lifestyle changes, not quick fixes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Professional support every step of the way
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
