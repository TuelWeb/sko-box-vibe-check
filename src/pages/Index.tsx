import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Concept from "../components/Concept";
import Products from "../components/Products";
import Social from "../components/Social";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO optimizations
    document.title = "SKO_BOX - Vêtements de marque à prix cassés sur Vinted";
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Concept />
      <Products />
      <Social />
      <Footer />
    </>
  );
};

export default Index;
