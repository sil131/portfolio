import React, { useState } from 'react';

const ThemeToggleButton = () => {
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
    <button
      onClick={handleToggleTheme}
      className={`theme-toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggleButton;