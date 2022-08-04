import data from '../data.json';
import React, { useState, useEffect } from "react";

function Destinations() {

  /*TODO: cambio destinazione + versione mobile*/

  const [currentPlanet, setCurrentPlanet] = useState(0);
  //const [selPlanet, setselPlanet] = useState(data.destinations[0]);

  const dataDestination = data.destinations[currentPlanet];
  const image = dataDestination.images.png;


  return (
    <>
      <div className='l-container'>
        <h5 className='section-title '><span>01</span> Pick your destination</h5>
        <img src={image} alt='planet' className='planet-image' />
      </div>
      <div className='r-container'>

        <div className='dest-nav'>
          {data.destinations.map(dest => {
              return (
                <button className='nav-btn'>{dest.name}</button>
              )
            }
          )}
        </div>
        <h1 className='dest-name'>{dataDestination.name}</h1>
        <p className='dest-description'>
          {dataDestination.description}
        </p>
        <div className='dest-details'>
          <div className='box'>
            <p className='subhead-2'>AVG. DISTANCE</p>
            <p className='subhead-1'>{dataDestination.distance}</p>
          </div>
          <div className='box'>
            <p className='subhead-2'>Est. travel time</p>
            <p className='subhead-1'>{dataDestination.travel}</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Destinations;