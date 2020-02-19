import React from "react";
import { HashRouter  as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import RidesGame from "./components/ridesGame";
import AboutRides from "./AboutRides";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/" component={RidesGame} />
        <Route path="/AboutRides" component={AboutRides} />
        </Switch>
      </div>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
