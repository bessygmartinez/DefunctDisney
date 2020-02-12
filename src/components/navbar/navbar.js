import React from 'react';
import logo from '../../logo.svg'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar-fixed">
      <nav>
      <div className="nav-wrapper white nav-text">    
        <img src={logo} className="brand-logo right App-logo heartbeat" alt="retro mickey ears" />
        <a href="index" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

          <ul id="nav-mobile" className="left hide-on-med-and-down">              
            <li><h3><b>DefunctDisney</b></h3></li>
            <li><div id="tagline">A memory game featuring defunct Walt Disney World rides.</div></li>
          <li><a href="collapsible.html">Learn more about the rides...</a></li>
          <li><a href="https://github.com/bessygmartinez/DefunctDisney" target="_new">GitHub Repo</a></li>
        </ul>
      </div>
    </nav>


    <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
    </div>  
    )
}

export default Navbar;