// app/page.tsx

import About from "./components/About";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
