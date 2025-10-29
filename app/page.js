import Services from "@/Components/Services";
import Hero from "@/Components/Home/Hero";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import Footer from "@/Components/Footer";
import ContactSection from "@/Components/Contact";
import Testimonials from "@/Components/Testimonials";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Features Section */}
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />

    </div>
  );
}
