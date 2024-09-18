// src/App.js
import React from "react";
import { Box } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import NavMenu from "./components/NavMenu";
import CaseStudies from "./components/CaseStudies";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <NavMenu />
      <HeroSection />
      <CaseStudies />
      <ContactForm />
      <Footer />
    </Box>
  );
}

export default App;
