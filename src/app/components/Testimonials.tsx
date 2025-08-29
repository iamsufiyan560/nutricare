// // app/components/Testimonials.tsx
// "use client";
// import { Star } from "lucide-react";

// const Testimonials = () => {
//   // Testimonials data - dynamic array for easy editing
//   const testimonials = [
//     {
//       name: "Aditi Sharma",
//       location: "Mumbai, Maharashtra",
//       rating: 5,
//       review:
//         "The meal plans are simple and effective, I feel healthier already! The personalized approach made all the difference in my weight loss journey.",
//       result: "Lost 8kg in 3 months",
//     },
//     {
//       name: "Rahul Verma",
//       location: "Delhi, NCR",
//       rating: 5,
//       review:
//         "Lost 5kg in 2 months with a diet that fit my lifestyle. No more restrictive eating - just smart, balanced choices that actually work.",
//       result: "Improved energy levels",
//     },
//     {
//       name: "Neha Kapoor",
//       location: "Bangalore, Karnataka",
//       rating: 5,
//       review:
//         "Finally found a nutritionist who understands my needs. The support and guidance have been incredible throughout my transformation.",
//       result: "Better digestion & health",
//     },
//     {
//       name: "Vikram Singh",
//       location: "Pune, Maharashtra",
//       rating: 5,
//       review:
//         "As a busy professional, I needed something practical. These meal plans work perfectly with my schedule and the results speak for themselves.",
//       result: "Lost 12kg in 4 months",
//     },
//     {
//       name: "Priya Patel",
//       location: "Ahmedabad, Gujarat",
//       rating: 5,
//       review:
//         "The quarterly plan was perfect for me. The extra support and recipe suggestions made healthy eating enjoyable rather than a chore.",
//       result: "Maintained ideal weight for 1+ year",
//     },
//     {
//       name: "Arjun Reddy",
//       location: "Hyderabad, Telangana",
//       rating: 5,
//       review:
//         "Best investment I've made for my health. The personalized approach and constant motivation helped me achieve goals I thought were impossible.",
//       result: "Reversed pre-diabetes",
//     },
//   ];

//   // Function to render star ratings
//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         className={`w-5 h-5 ${
//           index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
//         }`}
//       />
//     ));
//   };

//   return (
//     <section id="testimonials" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Real stories from real people who have transformed their lives
//             through personalized nutrition and dedicated support.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
//             >
//               {/* Rating Stars */}
//               <div className="flex items-center mb-4">
//                 {renderStars(testimonial.rating)}
//               </div>

//               {/* Review Text */}
//               <blockquote className="text-gray-700 mb-6 leading-relaxed">
//                 "{testimonial.review}"
//               </blockquote>

//               {/* Client Info */}
//               <div className="border-t pt-4">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="font-semibold text-gray-900">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       {testimonial.location}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Result Badge */}
//                 <div className="mt-3">
//                   <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
//                     {testimonial.result}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-12">
//           <p className="text-lg text-gray-600 mb-6">
//             Ready to start your own success story?
//           </p>
//           <button
//             onClick={() => {
//               const element = document.querySelector("#contact");
//               if (element) {
//                 element.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//             className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             Join Them Today
//           </button>
//         </div>

//         {/* Statistics */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div>
//             <div className="text-2xl font-bold text-green-600 mb-2">500+</div>
//             <p className="text-gray-600 text-sm">Success Stories</p>
//           </div>
//           <div>
//             <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
//             <p className="text-gray-600 text-sm">Achieved Goals</p>
//           </div>
//           <div>
//             <div className="text-2xl font-bold text-green-600 mb-2">4.9/5</div>
//             <p className="text-gray-600 text-sm">Average Rating</p>
//           </div>
//           <div>
//             <div className="text-2xl font-bold text-blue-600 mb-2">3-6</div>
//             <p className="text-gray-600 text-sm">Months to Results</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// app/components/Testimonials.tsx
"use client";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  // Testimonials data - dynamic array for easy editing
  const testimonials = [
    {
      name: "Aditi Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      review:
        "The meal plans are incredibly practical and sustainable. I've lost 8kg in 3 months without feeling restricted. The personalized approach made all the difference!",
      result: "Lost 8kg in 3 months",
      avatar: "AS",
      bgColor: "from-rose-400 to-pink-400",
    },
    {
      name: "Rahul Verma",
      location: "Delhi, NCR",
      rating: 5,
      review:
        "Finally found a nutrition plan that fits my busy lifestyle. No more restrictive eating - just smart, balanced choices that actually work long-term.",
      result: "Improved energy levels",
      avatar: "RV",
      bgColor: "from-blue-400 to-cyan-400",
    },
    {
      name: "Neha Kapoor",
      location: "Bangalore, Karnataka",
      rating: 5,
      review:
        "The support and guidance have been incredible. My digestive issues are completely resolved and I feel healthier than I have in years.",
      result: "Better digestion & health",
      avatar: "NK",
      bgColor: "from-emerald-400 to-green-400",
    },
    {
      name: "Vikram Singh",
      location: "Pune, Maharashtra",
      rating: 5,
      review:
        "As a busy professional, I needed something practical. These meal plans work perfectly with my schedule and the results speak for themselves.",
      result: "Lost 12kg in 4 months",
      avatar: "VS",
      bgColor: "from-purple-400 to-violet-400",
    },
    {
      name: "Priya Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      review:
        "The quarterly plan was perfect for me. The recipe suggestions made healthy eating enjoyable rather than a chore. Highly recommend!",
      result: "Maintained ideal weight for 1+ year",
      avatar: "PP",
      bgColor: "from-amber-400 to-orange-400",
    },
    {
      name: "Arjun Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      review:
        "Best investment I've made for my health. The personalized approach helped me achieve goals I thought were impossible. Truly life-changing!",
      result: "Reversed pre-diabetes",
      avatar: "AR",
      bgColor: "from-teal-400 to-cyan-400",
    },
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-200/10 to-emerald-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <Star className="w-4 h-4 text-yellow-600 mr-2 fill-current" />
            <span className="text-sm font-medium text-yellow-800">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real transformations from real people who trusted us with their
            health journey. Here's how we've helped them achieve their wellness
            goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-gray-600" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                <div className="flex space-x-1 mr-3">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="text-sm text-gray-500">5.0</div>
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-700 mb-8 leading-relaxed relative z-10">
                "{testimonial.review}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-start justify-between border-t pt-6">
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${testimonial.bgColor} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Result Badge */}
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-2 rounded-full border border-green-200">
                  ✨ {testimonial.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white text-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <p className="text-green-100 font-medium">Success Stories</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <p className="text-green-100 font-medium">
                Goal Achievement Rate
              </p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                4.9/5
              </div>
              <p className="text-green-100 font-medium">Average Rating</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                3-6
              </div>
              <p className="text-green-100 font-medium">Months to Results</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-green-600 fill-current" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Proven Results
              </h3>
              <p className="text-sm text-gray-600">
                Over 500 successful transformations with measurable outcomes
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Quote className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Real Testimonials
              </h3>
              <p className="text-sm text-gray-600">
                Authentic reviews from verified clients across India
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-purple-600 font-bold text-lg">24/7</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Ongoing Support
              </h3>
              <p className="text-sm text-gray-600">
                Continuous guidance throughout your transformation journey
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their health
            and lifestyle with our personalized nutrition plans.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Join Them Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
