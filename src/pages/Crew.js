import data from '../data.json';
import React, { useState } from "react";

function Crew() {

  const [dataCrew, setDataCrew] = useState(data.crew[0]);
  const [active, setActive] = useState(0);
  const image = dataCrew.images.png;

  const changeCrew = (index) => {
    setDataCrew(data.crew[index]);
    setActive(index);
  }

  return (
    <>
    <h5 className='section-title mob'><span>02</span> Meet your crew</h5>
      <div className='flex-container'>
        <div className='l-container'>
          <h5 className='section-title '><span>02</span> Meet your crew</h5>
          <div className='information'>
            <h4 className='role'>{dataCrew.role}</h4>
            <h3 className='name'>{dataCrew.name}</h3>
            <p className='bio'>{dataCrew.bio}</p>
          </div>  
          <div className='crew-bullets'>
            {data.crew.map((crew,i) => {
                return (
                  <button className={ active === i ? 'bullets-btn active': 'bullets-btn'}  key={i} onClick={() => changeCrew(i)}></button>
                )
              }
            )}
          </div>
        </div>
        <div className='r-container'>
          <img src={image} alt='crew' className='crew-image' />
        </div>
      </div>
    </>
  );
}

export default Crew;