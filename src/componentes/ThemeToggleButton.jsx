import React, { useContext } from 'react';
import { ThemeContext } from '../componentes/ThemeContext';

const ThemeToggleButton = ({ burguerFunction }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <button
        onClick={handleToggleTheme}
        className={`theme-toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      >
        {!isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4756df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4756df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
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
