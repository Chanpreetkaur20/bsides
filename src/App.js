import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Speakers from './components/Speakers/Speakers';
import Testimonials from './components/Testimonials/Testimonials';
import Sponsors from './components/Sponsors/Sponsors';
import Schedule from './components/Schedule/Schedule';
import Events from './components/Events/Events';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SplashCursor from './components/SplashCursor/TargetCursor';
import './App.css';

function App() {
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-fade-in, .scroll-scale-in, .scroll-slide-left, .scroll-slide-right'
    );
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    
    <div className="App bg-gray-900 text-gray-100 font-inter min-h-screen">
      <SplashCursor />
      <Header />
      
      <main>
        <Hero />
        <About />
        {/* <Testimonials /> */}
         {/* <Schedule />
        <Events /> */}
        <Speakers />
        <Sponsors />
       
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;