import Navbar from "@/components/Navbar";
import Features from "@/sections/Features";
import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import NewHero from "@/sections/NewHero";




export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <NewHero />
      <Features />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

