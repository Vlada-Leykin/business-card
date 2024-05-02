import React from 'react';
import ProfilePicture from '../assets/profilepic.jpg';

function Header() {
  return (
    <header className="container my-3">
      <div className="row justify-content-between align-items-center">
      <div className="col-sm-4 text-center text-sm-start" >
        <img src={ProfilePicture} alt="Vlada Leykin" width="65" height="65" />
      </div>
      <div className="col-sm-4 text-center text-sm-end">
        <a className='btn' href='#about_me'>About me</a>
        <a className='btn' href='#cv'>CV</a>
      </div>
      </div>
    </header>
  );
}

export default Header;
