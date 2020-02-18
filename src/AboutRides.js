import React from "react";
import rides from "./rides.json";
import "./AboutRides.css";

function AboutRides() {
  return (
      <main>
          <div className="rides-container">
            <div className="container">
            {rides.map(ride => (
          <div className="row card-row" key={ride.id}>      
          <div className="col s12 m7 l12">
            <div className="card about-card">
              <div className="card-image"><a href={ride.disney_wiki_link} target="_new"><img
                  src={ride.image}
                  alt={ride.name}
                  title={ride.name}
                  className="responsive-img "
                ></img></a>
                <span className="card-title"><a href={ride.disney_wiki_link} target="_new">{ride.name}</a></span>
              </div>
              <div className="card-content">
               Park: {ride.location}<br />
               Date Opened: {ride.date_opened}<br />
               Date Closed: {ride.date_closed}
              </div>
            </div>
          </div>
         </div> 
            ))}
      </div>
      </div>
    </main>
  );
}

export default AboutRides;
