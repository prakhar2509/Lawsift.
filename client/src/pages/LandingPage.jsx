import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Select from "../components/Select";
import Features from "../components/Features";
import Footer from "../components/Footer";

function LandingPage({ setData }) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Select />
      <About />
      <Footer />
    </>
  );
}

export default LandingPage;
