import React from 'react';
import ProfilePicture from '../assets/profilepic.jpg';

function Header() {
  return (
    <header className="container my-3">
      <div className="row justify-content-between">
      <div className="col-sm-4" >
        <img src={ProfilePicture} alt="Vlada Leykin" width="50" height="50" />
      </div>
      <div className="col-sm-4">
        <a className='btn' href='#about_me'>About me</a>
        <a className='btn' href='#cv'>CV</a>
      </div>
      </div>
    </header>
  );
}

export default Header;
