import React from 'react';
import logo from '../../logo.svg'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar-fixed">
      <nav>
      <div className="nav-wrapper white nav-text">    
        <a href="index"><img src={logo} className="brand-logo right App-logo heartbeat" alt="retro mickey ears" /></a>
        <a href="index" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>

          <ul id="nav-mobile" className="left hide-on-med-and-down">              
            <li><b className="col s4"><h3><b>DefunctDisney</b></h3></b></li>
            <li><div id="tagline">A memory game featuring defunct Walt Disney World rides.</div></li>
            <li><a className="navpadding waves-effect waves-light modal-trigger" href="#how-to-play">How to Play</a></li>
            <li><a className="navpadding waves-effect waves-light" href="./rides.json">About the Rides</a></li>
        </ul>
      </div>
    </nav>


    <ul className="sidenav" id="mobile-nav">
    <li><h4><b>DefunctDisney</b></h4></li>
        <li><div id="tagline-mobile">A memory game featuring defunct Walt Disney World rides.</div></li>
        <li><a className="waves-effect waves-light modal-trigger" href="#how-to-play">How to Play</a></li>
        <li><a className="waves-effect waves-light" href="rides.html">About the Rides</a></li>
  </ul>
    </div>  
    )
}

export default Navbar;