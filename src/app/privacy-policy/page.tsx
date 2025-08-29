import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "August 29, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="bg-white/80  rounded-2xl shadow-xl p-8 sm:p-12 border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Privacy Policy
            <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mt-4"></div>
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: {lastUpdated}
          </p>

          <div className="space-y-8">
            <section
              id="introduction"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We respect your privacy and are committed to protecting your
                personal data. This privacy policy explains how we handle your
                information when you use our diet and nutrition services.
              </p>
            </section>

            <section
              id="data-collection"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2. Data We Collect
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Name and contact information</li>
                <li>Health and dietary information</li>
                <li>Payment information</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <section
              id="cookies"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3. Cookies and Tracking
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your
                experience. You can control cookie settings through your browser
                preferences.
              </p>
            </section>

            <section
              id="gdpr"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4. GDPR Compliance
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For EU residents, we comply with GDPR requirements. You have
                rights to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal data</li>
                <li>Request data correction or deletion</li>
                <li>Withdraw consent at any time</li>
                <li>File a complaint with supervisory authorities</li>
              </ul>
            </section>

            <section
              id="contact"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For privacy-related questions or concerns, please contact us at
                privacy@example.com
              </p>
            </section>

            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
