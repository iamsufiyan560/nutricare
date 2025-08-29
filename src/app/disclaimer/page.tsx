import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Disclaimer() {
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
            Disclaimer
            <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mt-4"></div>
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: {lastUpdated}
          </p>

          <div className="space-y-8">
            <section
              id="not-medical-advice"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1. Not Medical Advice
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The content provided through our services is for informational
                purposes only and is not intended as medical advice, diagnosis,
                or treatment. Always consult with qualified healthcare
                professionals regarding your specific health needs.
              </p>
            </section>

            <section
              id="no-guarantees"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2. No Guarantees
              </h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide accurate and up-to-date information,
                we make no representations or warranties of any kind about the
                completeness, accuracy, reliability, or suitability of the
                information provided.
              </p>
            </section>

            <section
              id="personal-responsibility"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3. Personal Responsibility
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Any actions you take based on the information provided through
                our services are strictly at your own risk. You are responsible
                for consulting with appropriate healthcare professionals before
                making any dietary or lifestyle changes.
              </p>
            </section>

            <section
              id="third-party-content"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4. Third-Party Content
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our service may contain links to third-party websites or
                content. We are not responsible for the content, accuracy, or
                practices of these third-party sites.
              </p>
            </section>

            <section
              id="health-conditions"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5. Health Conditions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any health conditions, are pregnant, nursing, or
                have specific dietary requirements, consult with your healthcare
                provider before using our services or implementing any dietary
                changes.
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
