import React from 'react';
import ProfilePicture from '../assets/profileimg.png';

function Header() {
  return (
    <header className="container mb-3 sticky-top bg-white">
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#about_me">
            <img src={ProfilePicture} alt="Vlada Leykin" width="65" height="65" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about_me">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cv">CV</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
