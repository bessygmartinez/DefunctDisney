import React from 'react';
import './ridesCard.css';

const rideCard = ({ id, name, image, handleClicked }) => (
        <div className="col l2 m4 s12 center">
        <div
            className="card"
            key={id}
            data-id={id}
            name={name}
            style={{ backgroundImage: `url(${image})` }}
            onClick={handleClicked}
            alt={name}
            title={name}
        >
        </div>
        </div>
)

export default rideCard;