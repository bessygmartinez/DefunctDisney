import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutRides from "./AboutRides";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";
import RidesGame from "./components/ridesGame";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <div>
        <Navbar />
        <Route exact path="/" component={RidesGame} />
        <Route path="/AboutRides" component={AboutRides} />
      </div>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
