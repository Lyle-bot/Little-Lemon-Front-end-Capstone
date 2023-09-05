import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white offset-lg-4">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            <Link to="/about" className="nav-link px-lg-3">About</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/reservations" className="nav-link px-lg-3">Reservations</Link>
            <Link to="/order-online" className="nav-link">Order Online</Link>
            <Link to="/login" className="nav-link px-lg-3">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
