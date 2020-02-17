import React, { Component } from "react";
import rides from "./rides.json";
import Navbar from "./components/navbar";
import HowToPlayModal from "./components/howtoplaymodal";
import Scoreboard from "./components/scoreboard";
import RidesCard from './components/ridesCard';
import Footer from "./components/footer";
import "./App.css";
import { toast } from "materialize-css";

class App extends Component {
  state = {
    rides: rides,
    ridesClicked: [],
    topScore: 0,
    message: ""
  };

  handleClicked = event => {
    const name = event.target.attributes.getNamedItem("name").value;
    this.shuffleRides();
    this.checkClick(name, this.updateTopScore);
  };

  shuffleRides = (rides) => {
    this.setState(rides = this.shuffleRidesArray(this.state.rides));
  };

  shuffleRidesArray = (a) => {
    let x, y, i;
    for (i = a.length - 1; i > 0; i--) {
      x = Math.floor(Math.random() * (i + 1));
      y = a[i];
      a[i] = a[x];
      a[x] = y;
    }
    return a;
  };

  updateTopScore = (newState, cb) => {
    if (newState.ridesClicked.length > newState.topScore) {
      newState.topScore++;
      this.setState(newState);
    }
    cb(newState);
  };

  youWin = newState => {
    if (newState.ridesClicked.length === 12) {
      newState.message = `You Remembered! You Win!`;
      newState.ridesClicked = [];
      this.setState(newState);
    }
  };

  checkClick = (ride, cb) => {
    const newState = { ...this.state };
    if (newState.ridesClicked.includes(ride)) {
      newState.message = `Game Over! You already clicked on ${ride}!`;
      console.log(newState.message)
      toast({html: `${newState.message}`, displayLength: 2000})
      newState.ridesClicked = [];
      this.setState(newState);
    } else {
      newState.ridesClicked.push(ride);
      newState.message = `Nice!`;
      this.setState(newState);
    }
    cb(newState, this.youWin);
  };

  render() {
    return (
      <div>
        <HowToPlayModal />
        <header>
          <Navbar />
          <Scoreboard
          score={this.state.ridesClicked.length} 
          topScore={this.state.topScore}
          />
        </header>

        <main>
          <div className="row">
          <div className="col l12 m12 s6 offset-s2">
          <div className="ridesDiv">
          {this.state.rides.map(ride => (
          <RidesCard
            id={ride.id}
            key={ride.id}
            name={ride.name}
            image={ride.image}
            handleClicked={this.handleClicked}
          />
          ))}
        <br style={{clear: "both"}} />
        </div>
        </div>
        </div>
        </main>
        
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
