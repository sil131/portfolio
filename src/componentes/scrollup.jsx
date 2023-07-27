import React, { useState } from 'react';
import 'boxicons';

function Scrollup() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <i
      className={`scroll-up ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      id="scroll-up"
      onClick={handleScrollUp}
    >
      <box-icon type='solid' name='up-arrow-circle' animation='tada' color='orange'></box-icon>
    </i>
  );
}

export default Scrollup;
