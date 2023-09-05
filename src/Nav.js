import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white offset-4">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link px-3" href="/about">About</a>
            <a className="nav-link" href="/menu">Menu</a>
            <a className="nav-link px-3" href="/reservations">Reservations</a>
            <a className="nav-link" href="/order-online">Order Online</a>
            <a className="nav-link px-3" href="/login">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
