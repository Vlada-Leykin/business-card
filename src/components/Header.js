import React from 'react';
import ProfilePicture from '../images/profilepic.jpg';

function Header() {
  return (
    <header className="container d-flex">
      <img src={ProfilePicture} alt="Vlada Leykin" width="40" height="40" />
      <h1>Vlada Leykin</h1>
    </header>
  );
}

export default Header;
