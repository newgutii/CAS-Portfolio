import React, { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import WhatIsCas from './components/WhatIsCas/WhatIsCas';
import AboutMe from './components/AboutMe/AboutMe';
import Experiences from './components/Experiences/Experiences';
import CasProject from './components/CasProject/CasProject';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Hero />
      <WhatIsCas />
      <AboutMe />
      <Experiences />
      <CasProject />
      <Footer />
    </div>
  );
}

export default App;
