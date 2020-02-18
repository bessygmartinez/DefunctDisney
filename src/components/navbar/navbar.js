import React from 'react';
import { Link } from "react-router-dom";
import HowToPlayModal from "../howtoplaymodal";
import logo from '../../logo.svg'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar-fixed">
          <HowToPlayModal />
      <nav>
      <div className="nav-wrapper white nav-text">    
        <Link to="/DefunctDisney"><img src={logo} className="brand-logo right App-logo heartbeat" alt="retro mickey ears" /></Link>
        <Link to="/DefunctDisney" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></Link>

          <ul id="nav-mobile" className="left hide-on-med-and-down">              
            <li><Link to="/DefunctDisney" className="col s4" style={{color: "#3c334a"}}><h3><b>DefunctDisney</b></h3></Link></li>
            <li><div id="tagline">A memory game featuring defunct Walt Disney World rides.</div></li>
            <li><a className="navpadding waves-effect waves-light" href="/DefunctDisney">Home</a></li>
            <li><a className="navpadding waves-effect waves-light modal-trigger" href="#how-to-play">How to Play</a></li>
            <li><a className="navpadding waves-effect waves-light" href="/AboutRides">About the Rides</a></li>
        </ul>
      </div>
    </nav>


    <ul className="sidenav" id="mobile-nav">
    <li><Link to="/" style={{color: "#3c334a"}}><h4><b>DefunctDisney</b></h4></Link></li>
        <li><div id="tagline-mobile">A memory game featuring defunct Walt Disney World rides.</div></li>
        <li><a className="waves-effect waves-light" href="/">Home</a></li>
        <li><a className="waves-effect waves-light modal-trigger" href="#how-to-play">How to Play</a></li>
        <li><Link to="/AboutRides" className="waves-effect waves-light">About the Rides</Link></li>
  </ul>
    </div>  
    )
}

export default Navbar;