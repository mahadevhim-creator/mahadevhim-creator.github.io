import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <WhyChooseMe />
      <Contact />
    </div>
  );
}

export default App;