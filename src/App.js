import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AboutRides from "./AboutRides";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";
import RidesGame from "./components/ridesGame";

function App() {
  return (
    <Router basename="/">
      <div>
        <Navbar />
        <Route exact path="/" component={RidesGame} />
        <Route path="/AboutRides" component={AboutRides} />
        <Route exact path="/DefunctDisney" component={RidesGame} />
      </div>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
