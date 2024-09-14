// src/App.js
import React from "react";
import { Box } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import AboutPage from "./components/AboutPage";
import NavMenu from "./components/NavMenu";
import CaseStudies from "./components/CaseStudies";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Box>
      <NavMenu />
      <HeroSection />
      <CaseStudies />
      <ContactForm />
    </Box>
  );
}

export default App;
