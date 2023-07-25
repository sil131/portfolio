import React, { useState } from 'react';
import scrollup from '../assets/icons8-upward-arrow.gif';

function Scrollup() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  
  };

  return (
    <i className={`scroll-up ${isDarkMode ? 'dark-mode' : 'light-mode'}`} id="scroll-up">
      <img src={scrollup} className="socicon up-arrow" alt="" />
    </i>
  );
}

export default Scrollup;
