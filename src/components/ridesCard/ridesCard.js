import React from 'react';
import './ridesCard.css';

const rideCard = ({ id, name, image, location, dateOpened, dateClosed, handleClicked }) => (
    <div className="ridesDiv">
        <div
            className="card"
            key={id}
            data-id={id}
            name={name}
            style={{ backgroundImage: `url(${image})` }}
            location={location}
            dateOpened = {dateOpened}
            dateClosed = {dateClosed}
            onClick={handleClicked}
        >
        </div>
    </div>
)

export default rideCard;