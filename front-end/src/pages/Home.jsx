import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import OfferingsSection from "@/components/OfferingsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <OfferingsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
