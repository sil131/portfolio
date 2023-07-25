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

  return (
    <>
      <button
        onClick={handleToggleTheme}
        className={`theme-toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      >
        {!isDarkMode ? (
          <img src={moonIcon} alt="Moon Icon" style={{ height: '24px', width: '24px', fill: '#333333' }} />
        ) : (
          <img src={sunIcon} alt="Sun Icon" style={{ height: '24px', width: '24px' }} />
        )}
      </button>

      <button className="burger-menu" id="burger-menu" onClick={burguerFunction}>
        <svg
          className='section'
          fill={isDarkMode ? '#ffffff' : '#333333'}
          height="32px"
          id="Layer_1"
          style={{ enableBackground: 'new 0 0 32 32' }}
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
        >
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
        </svg>
      </button>
    </>
  );
};

export default ThemeToggleButton;
