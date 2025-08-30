// app/components/Pricing.tsx
"use client";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  // Pricing plans data - dynamic array for easy editing
  const pricingPlans = [
    {
      name: "Monthly",
      price: "₹2,000",
      period: "/month",
      description: "Perfect for trying our services",
      features: [
        "Personalized diet plan",
        "Weekly check-ins",
        "Email support",
        "Basic meal suggestions",
        "Progress tracking",
      ],
      isPopular: false,
      ctaText: "Get Started",
    },
    {
      name: "Quarterly",
      price: "Buy 3 Get 1 Free",
      period: "(4 months total)",
      description: "Best value for committed individuals",
      features: [
        "Everything in Monthly",
        "Bi-weekly video calls",
        "Custom recipe suggestions",
        "Supplement recommendations",
        "Priority support",
        "1 FREE month included",
      ],
      isPopular: true,
      ctaText: "Most Popular",
    },
    {
      name: "Yearly",
      price: "₹20,000",
      period: "/year",
      description: "Ultimate transformation package",
      features: [
        "Everything in Quarterly",
        "Monthly in-person/video consultations",
        "Family meal planning",
        "Special occasion guidance",
        "24/7 WhatsApp support",
        "Free health assessments",
      ],
      isPopular: false,
      ctaText: "Best Value",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options designed to fit your needs and budget. All
            plans include personalized nutrition guidance and ongoing support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-6xl mx-auto gap-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-8 ${
                plan.isPopular
                  ? "ring-2 ring-green-500 transform scale-105"
                  : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.isPopular
                    ? "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Every plan starts with a full month of diet guidance. No contracts —
            cancel future months anytime.
          </p>

          <p className="text-sm text-gray-500">
            Prices are in Indian Rupees (INR). Payment plans available for
            quarterly and yearly subscriptions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
