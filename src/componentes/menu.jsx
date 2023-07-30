import React from 'react';

function Menu({ isDarkMode, toggleDarkMode }) {
  function open() {
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('ocultar');
  }

  return (
    <>
      <ul className={`navigation ${isDarkMode ? 'dark-mode' : 'light-mode'}`} id="navigation">
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li> 
      </ul>

      <div className="navigation-buttons">
        {/* Burger Button */}
        <button className="burger-menu" id="burger-menu" onClick={open}>
          <svg
            className="section"
            fill={isDarkMode ? '#ffffff' : '#4756df'}
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
      </div>
    </>
  );
}

export default Menu;


