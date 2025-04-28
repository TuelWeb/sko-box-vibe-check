import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Concept from "../components/Concept";
import Products from "../components/Products";
import Social from "../components/Social";
import Footer from "../components/Footer";
import Temp404Overlay from "../components/Temp404Overlay";

// Set this to false to remove the 404 overlay
const SHOW_404_OVERLAY = true;

const Index = () => {
  const [showOverlay, setShowOverlay] = useState(SHOW_404_OVERLAY);

  useEffect(() => {
    // SEO optimizations
    document.title = "SKO_BOX - Vêtements de marque à prix cassés sur Vinted";
  }, []);

  // This function won't actually change the state anymore
  // It's kept for compatibility with the component props
  const handleCloseOverlay = () => {
    // Only allow closing if SHOW_404_OVERLAY is false
    if (!SHOW_404_OVERLAY) {
      setShowOverlay(false);
    }
    // Otherwise do nothing, keeping the overlay visible
  };

  return (
    <>
      {showOverlay ? (
        <Temp404Overlay onClose={handleCloseOverlay} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Concept />
          <Products />
          <Social />
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
