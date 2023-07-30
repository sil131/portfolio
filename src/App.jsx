import React, { useState } from 'react';
import Header from "./componentes/header";
import './App.css';
import Hero from "./componentes/hero";
import Moreabout from "./componentes/more-about";
import Skills from "./componentes/skills";
import Projects from "./componentes/projects";
import Contact from "./componentes/contact";
import Socials from "./componentes/socials";
import Scrollup from "./componentes/scrollup";
import Footer from "./componentes/footer";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Pass the isDarkMode and toggleDarkMode as props to Menu */}
      <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <Header />
      <Hero />
      <Moreabout />
      <Skills />
      <Projects />
      <Contact />
      <Socials />
      <Scrollup />
      <Footer />
    </div>
  );
}

export default App;
