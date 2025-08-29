// // app/components/Contact.tsx
// "use client";
// import { useState } from "react";
// import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<
//     "idle" | "success" | "error"
//   >("idle");

//   // Contact information data
//   const contactInfo = [
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: "Phone",
//       info: "+91 98765 43210",
//       subInfo: "Mon-Fri 9AM-6PM",
//     },
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: "Email",
//       info: "hello@nutricare.com",
//       subInfo: "We reply within 24 hours",
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: "Location",
//       info: "Mumbai, Maharashtra",
//       subInfo: "Online consultations available",
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: "Hours",
//       info: "9:00 AM - 6:00 PM",
//       subInfo: "Monday to Friday",
//     },
//   ];

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("idle");

//     try {
//       // Using FormSubmit.co for form handling
//       const response = await fetch(
//         "https://formsubmit.co/hello@nutricare.com",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             message: formData.message,
//             _subject: "New Nutrition Consultation Request",
//             _captcha: "false",
//           }),
//         }
//       );

//       if (response.ok) {
//         setSubmitStatus("success");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setSubmitStatus("error");
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Get in touch today for a free consultation. Let's discuss your goals
//             and create a personalized plan that works for you.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               Send a Message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Field */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               {/* Message Field */}
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
//                   placeholder="Tell us about your goals, current challenges, or any specific questions..."
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
//               >
//                 {isSubmitting ? (
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="ml-2 w-5 h-5" />
//                   </>
//                 )}
//               </button>
//             </form>

//             {/* Status Messages */}
//             {submitStatus === "success" && (
//               <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg">
//                 <p className="text-green-700">
//                   Thank you! Your message has been sent successfully. We'll get
//                   back to you within 24 hours.
//                 </p>
//               </div>
//             )}

//             {submitStatus === "error" && (
//               <div className="mt-4 p-4 bg-red-100 border border-red-200 rounded-lg">
//                 <p className="text-red-700">
//                   Sorry, there was an error sending your message. Please try
//                   again or contact us directly.
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               Get in Touch
//             </h3>

//             <div className="space-y-6 mb-8">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="flex items-start">
//                   <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-1">
//                       {info.title}
//                     </h4>
//                     <p className="text-gray-700 mb-1">{info.info}</p>
//                     <p className="text-sm text-gray-500">{info.subInfo}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* FAQ Section */}
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h4 className="text-xl font-bold text-gray-900 mb-4">
//                 Frequently Asked Questions
//               </h4>

//               <div className="space-y-4">
//                 <div>
//                   <h5 className="font-semibold text-gray-900 mb-2">
//                     How quickly will I see results?
//                   </h5>
//                   <p className="text-gray-600 text-sm">
//                     Most clients see initial improvements in energy and
//                     well-being within 2-3 weeks, with significant results
//                     typically visible after 6-8 weeks of consistent following of
//                     the plan.
//                   </p>
//                 </div>

//                 <div>
//                   <h5 className="font-semibold text-gray-900 mb-2">
//                     Do you accommodate dietary restrictions?
//                   </h5>
//                   <p className="text-gray-600 text-sm">
//                     Absolutely! We create plans for vegetarians, vegans, those
//                     with food allergies, diabetes, PCOS, and other specific
//                     dietary needs.
//                   </p>
//                 </div>

//                 <div>
//                   <h5 className="font-semibold text-gray-900 mb-2">
//                     What's included in the consultation?
//                   </h5>
//                   <p className="text-gray-600 text-sm">
//                     Your initial consultation includes health assessment, goal
//                     setting, personalized meal plan creation, and guidance on
//                     implementing sustainable lifestyle changes.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// app/components/Contact.tsx
"use client";
import { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Contact information data
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+91 98765 43210",
      subInfo: "Mon-Fri 9AM-6PM",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "hello@nutricare.com",
      subInfo: "We reply within 24 hours",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Mumbai, Maharashtra",
      subInfo: "Online consultations available",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      info: "9:00 AM - 6:00 PM",
      subInfo: "Monday to Friday",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Using FormSubmit.co for form handling
      const response = await fetch(
        "https://formsubmit.co/msufiyanhusen@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _subject: "New Nutrition Consultation Request",
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50  relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Health Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch today for a free consultation. Let's discuss your goals
            and create a personalized plan that works perfectly for your
            lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white h-fit rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-400"
                  placeholder="Tell us about your goals, current challenges, or any specific questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                ) : (
                  <>
                    Send Message
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-semibold mb-1">
                    Message sent successfully!
                  </p>
                  <p className="text-green-700 text-sm">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-semibold mb-1">
                    Error sending message
                  </p>
                  <p className="text-red-700 text-sm">
                    Sorry, there was an error. Please try again or contact us
                    directly.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-gray-700 font-medium mb-1">
                          {info.info}
                        </p>
                        <p className="text-sm text-gray-500">{info.subInfo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Why Choose Us?
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    24hr
                  </div>
                  <p className="text-xs text-gray-600">Response Time</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    500+
                  </div>
                  <p className="text-xs text-gray-600">Happy Clients</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    95%
                  </div>
                  <p className="text-xs text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl p-8 border border-green-100 mt-12">
          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
            Frequently Asked Questions
          </h4>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                How quickly will I see results?
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most clients see initial improvements in energy and well-being
                within 2-3 weeks, with significant results typically visible
                after 6-8 weeks of consistent following of the plan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Do you accommodate dietary restrictions?
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely! We create plans for vegetarians, vegans, those with
                food allergies, diabetes, PCOS, and other specific dietary
                needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                What's included in the consultation?
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your initial consultation includes health assessment, goal
                setting, personalized meal plan creation, and guidance on
                implementing sustainable lifestyle changes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Do you offer online consultations?
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes! We offer both in-person consultations in Mumbai and online
                video consultations for clients across India and
                internationally.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Don't wait another day to start your journey towards better
              health. Book your free consultation now and take the first step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-green-100">
                <CheckCircle className="w-5 h-5 mr-2" />
                Free initial consultation
              </div>
              <div className="flex items-center text-green-100">
                <CheckCircle className="w-5 h-5 mr-2" />
                No commitment required
              </div>
              <div className="flex items-center text-green-100">
                <CheckCircle className="w-5 h-5 mr-2" />
                Personalized approach
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
