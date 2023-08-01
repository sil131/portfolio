import React from 'react';
import 'boxicons';

function Socials() {
  return (
    <div className="socials">
      <a href="#" target="_blank">
        <box-icon type='logo' name='twitter' animation='tada' color='blue'></box-icon> 
      </a>
      <a href="#" target="_blank">
        <box-icon type='logo' name='instagram-alt' animation='tada' color='blue'></box-icon>
      </a>
      <a href="#" target="_blank">
        <box-icon type='logo' name='linkedin-square' animation='tada' color='blue'></box-icon>
      </a>
      <a href="#" target="_blank">
        <box-icon type='logo' name='github' animation='tada' color='blue'></box-icon>
      </a>
    </div>
  );
}

export default Socials;
