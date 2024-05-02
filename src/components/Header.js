import React from 'react';
import ProfilePicture from '../assets/profilepic.jpg';

function Header() {
  return (
    <header className="row justify-content-start">
      <div className="container col-auto">
        <img src={ProfilePicture} alt="Vlada Leykin" width="50" height="50" />
      </div>
      <div className="container col-auto">
        <a className='btn' href='#about_me'>About me</a>
        <a className='btn' href='#cv'>CV</a>
      </div>
    </header>
  );
}

export default Header;
