// app/components/About.tsx
import { Heart, Target, TrendingUp, Award, Users, Clock } from "lucide-react";

const About = () => {
  // About highlights data - dynamic array for easy editing
  const aboutHighlights = [
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Healthy Lifestyle",
      description:
        "Promoting sustainable habits that fit seamlessly into your daily routine for long-term wellness.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Personalized Plans",
      description:
        "Custom nutrition strategies based on your health goals, preferences, and lifestyle requirements.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Long-term Results",
      description:
        "Focus on gradual, sustainable changes that create lasting transformation and improved health outcomes.",
      gradient: "from-emerald-500 to-green-500",
    },
  ];

  const yoe = 8; // years of experience
  const clients = 50; // number of clients

  const certifications = [
    { icon: <Award className="w-5 h-5" />, text: "M.Sc. Clinical Nutrition" },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Certified Diabetes Educator",
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Sports Nutrition Specialist",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-sm font-medium text-green-800">
              Meet Dr. Afreen Choudhary
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Nutrition Partner
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over {yoe} years of experience in clinical nutrition and
            wellness coaching, I'm passionate about helping individuals achieve
            their health goals through evidence-based nutrition strategies and
            compassionate guidance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Approach
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I believe that healthy eating should be enjoyable, not
                  restrictive. My approach combines scientific knowledge with
                  practical solutions, ensuring that your nutrition plan works
                  with your lifestyle, not against it.
                </p>
                <p>
                  Whether you're looking to manage weight, improve energy
                  levels, or address specific health concerns, I'm here to
                  support your journey every step of the way with personalized
                  strategies that actually work.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 text-yellow-500 mr-3" />
                Certifications & Expertise
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
                      {cert.icon}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {cert.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Values/Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Why Choose Me?
            </h3>
            {aboutHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {clients}+
              </div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {yoe}+
              </div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600 font-medium">Success Rate</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-violet-600 mb-2">
                24/7
              </div>
              <p className="text-gray-600 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
