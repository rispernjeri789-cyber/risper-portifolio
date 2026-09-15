import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <FeaturedProject />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
