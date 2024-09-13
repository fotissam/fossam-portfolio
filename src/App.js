// src/App.js
import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import HeroSection from './components/HeroSection'
import AboutPage from './components/AboutPage';
import NavMenu from './components/NavMenu';
import CaseStudies from './components/CaseStudies';

function App() {
  return (
    <div>
      <NavMenu />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes> */}
      <HeroSection />
      <CaseStudies/>
    </div>
  );
}

export default App;
