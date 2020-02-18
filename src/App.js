import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutRides from "./AboutRides";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";
import RidesGame from "./components/ridesGame";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={RidesGame} />
        <Route exact path="/AboutRides" component={AboutRides} />
        <Route exact path="/RidesGame" component={RidesGame} />
      </div>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
