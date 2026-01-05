import Hero from "../components/home/Hero";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import RatingsSection from "../components/home/RatingsSection";
import ServicesSection from "../components/home/ServicesSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <RatingsSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
