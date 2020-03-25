import React from "react";
import { Link } from 'react-router-dom'

//should the href be to? line 10

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand p-sm-3 p-md-3 p-lg-3 px-5 py-3" href="/"> 
        ANGE YU
      </a>
      <div className="navbar">
          <Link className="nav-link" to="/about">About</Link> 
          <Link className="nav-link" to="/about">|</Link>
          <Link className="nav-link" to="/portfolio">Portfolio</Link><Link className="nav-link" to="/contact">|</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;

