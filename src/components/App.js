import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import AboutMeSection from './AboutMeSection.js';
import MySkillsSection from './MySkillsSection.js';
import CV from './CV.js';

export default function App() {
  return (
    <>
      <Header />
      <AboutMeSection />
      <CV />
      <MySkillsSection />
      <Footer />
    </>
  );
}
