import React from "react";
import { Link } from 'react-router-dom'
import "./style.css";

//should the href be to? line 10

function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg light text-dark">
      <div className="nav">
       
              <h2>ANGE YU &nbsp;&nbsp;</h2>

            <div className="links align-middle">
              <a href="/">ABOUT&nbsp;&nbsp;</a>
              <a href="/portfolio">PORTFOLIO&nbsp;&nbsp;</a>
              <a href="/contact">CONTACT&nbsp;&nbsp;</a>
            </div>
      </div>                
    </nav>
  );
}

export default Nav;

