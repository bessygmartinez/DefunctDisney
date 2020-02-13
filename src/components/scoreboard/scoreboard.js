import React from 'react';
import './scoreboard.css'

function Scoreboard() {
    return (
        <div className="row">
        <div className="col s6 offset-s3">
          <div className="card"> 
            <div className="card-content center">
              <div className="row">
              <div className="col s12 m6"><b>Score: 0</b></div>
              <div className="col s12 m6"><b>Top Score: 0</b></div>
              </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Scoreboard;