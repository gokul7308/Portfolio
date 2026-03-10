import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import GitHubStats from './components/GitHubStats';
import CurrentlyWorking from './components/CurrentlyWorking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#030712] min-h-screen text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Architecture />
      <Achievements />
      <GitHubStats />
      <CurrentlyWorking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
