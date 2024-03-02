import React from "react";
import './navbar.css';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
function NavBar() {
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
             <a className="navbar-brand" href="/home">
        <img src={logo} alt="logo" width={30} height={24} className="d-inline-block align-text-top" />
      
      </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/explore">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="artwork">Upload Artwork</a>
              </li>      
             <li className="nav-item">
                <a className="nav-link" href="contact">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" id="search">Search</button>
            </form>
           <Link to='/login'> <button className="btn btn-primary" id="signup"  >Login</button></Link>
            <div className="default-avatar">
            <span className="initials">MS</span>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;