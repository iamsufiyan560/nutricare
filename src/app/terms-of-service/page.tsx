import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
            Terms of Service
            <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mt-4"></div>
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: {lastUpdated}
          </p>

          <div className="space-y-8">
            <section
              id="acceptance"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our services, you agree to be bound by
                these Terms of Service. If you disagree with any part of these
                terms, you may not access our services.
              </p>
            </section>

            <section
              id="services"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2. Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We provide diet and nutrition-related services. We reserve the
                right to modify, suspend, or discontinue any part of our
                services at any time.
              </p>
            </section>

            <section
              id="payments"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3. Payments and Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All purchases are final and non-refundable unless otherwise
                required by law. Subscription cancellations will take effect at
                the end of the current billing period.
              </p>
            </section>

            <section
              id="liability"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We are not liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our
                services.
              </p>
            </section>

            <section
              id="termination"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5. Account Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend accounts for
                violations of these terms, inappropriate behavior, or at our
                discretion.
              </p>
            </section>

            <section
              id="changes"
              className="rounded-xl bg-white/50 p-6  border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may modify these terms at any time. Continued use of our
                services after changes constitutes acceptance of the new terms.
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
