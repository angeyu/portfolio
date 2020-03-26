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
          ABOUT PORTFOLIO CONTACT
      </div>
    </nav>
  );
}

export default Nav;

