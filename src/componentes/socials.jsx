import React, { useState } from 'react';
import twitter from '../assets/icons8-twitter-circled.gif';
import instagram from '../assets/icons8-instagram.gif';
import linkedin from '../assets/icons8-linkedin-circled.gif';
import github from '../assets/icons8-github.gif';

function Socials() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
   
  };

  return (
    <div className={`socials ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <a href="#" target="_blank">
        <img src={twitter} alt="Twitter" loading="lazy" className="socicon" />
      </a>
      <a href="#" target="_blank">
        <img src={instagram} alt="Instagram" loading="lazy" className="socicon" />
      </a>
      <a href="#" target="_blank">
        <img src={linkedin} alt="Linkedin" loading="lazy" className="socicon" />
      </a>
      <a href="#" target="_blank">
        <img src={github} alt="Github" className="socicon" />
      </a>
    </div>
  );
}

export default Socials;
