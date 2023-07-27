import React, { useState } from 'react';
import 'boxicons'

function Socials() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
   
  };

  return (
    <div className={`socials ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <a href="#" target="_blank">
      <box-icon type='logo' name='twitter'animation='tada'color='orange'></box-icon> 
      </a>
      <a href="#" target="_blank">
      <box-icon type='logo' name='instagram-alt'animation='tada'color='orange'></box-icon>
      </a>
      <a href="#" target="_blank">
      <box-icon type='logo' name='linkedin-square'animation='tada'color='orange'></box-icon>
      </a>
      <a href="#" target="_blank">
      <box-icon type='logo' name='github'animation='tada'color='orange'></box-icon>
      </a>
    </div>
  );
}

export default Socials;
