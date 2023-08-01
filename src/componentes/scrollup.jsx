import React from 'react';
import 'boxicons';

function Scrollup() {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <i className="scroll-up">
      <box-icon type='solid' name='up-arrow-circle' animation='tada' color='blue' onClick={handleScrollUp}></box-icon>
    </i>
  );
}

export default Scrollup;

