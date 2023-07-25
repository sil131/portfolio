import React, { useState } from 'react';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';

const ThemeToggleButton = ({ burguerFunction }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

 
  const iconBorderStyle = { stroke: '#4756df' };

  return (
    <>
      <button className="burger-menu" id="burger-menu" onClick={burguerFunction}>
        {/* ... */}
      </button>
      
      <button
        onClick={handleToggleTheme}
        className={`theme-toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      >
        {!isDarkMode ? (
          <img src={sunIcon} alt="Sun Icon" style={{ height: '24px', width: '24px', fill: '#ffffff', ...iconBorderStyle }} />
        ) : (
          <img src={moonIcon} alt="Moon Icon" style={{ height: '24px', width: '24px', fill: '#ffffff', ...iconBorderStyle }} />
        )}
      </button>
    </>
  );
};

export default ThemeToggleButton;
