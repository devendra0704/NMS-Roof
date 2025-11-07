import Services from "@/Components/Services";
import Hero from "@/Components/Home/Hero";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import ContactSection from "@/Components/Contact";
import Testimonials from "@/Components/Home/Testimonials";
import LocationStats from "@/Components/Home/LocationStats";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <LocationStats />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
