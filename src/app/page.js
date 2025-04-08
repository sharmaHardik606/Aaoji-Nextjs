import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

