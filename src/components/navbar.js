import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link  className="navbar-brand" to="/">APP</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link fa fa-facebook-square" to="/planets"></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link fa fa-instagram" to="/vehicles"></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link fa fa-twitter" to="/people"></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link fa fa-youtube-play" to="/youtube"></Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;