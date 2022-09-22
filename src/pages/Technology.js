import data from '../data.json';
import React, { useState } from "react";

function Technology() {
  const [dataTechnology, setDataTechnology] = useState(data.technology[0]);
  const [active, setActive] = useState(0);
  const image = dataTechnology.images.portrait;
  const imageMob = dataTechnology.images.landscape;

  const changeDest = (index) => {
    setDataTechnology(data.technology[index]);
    setActive(index);
  }

  return (
    <>
      <h5 className='section-title mob'><span>03</span> SPACE LAUNCH 101</h5>

      <div className='l-container'>
        <h5 className='section-title '><span>03</span> SPACE LAUNCH 101</h5>
        <div className='flex-container'>
          <div className='tech-nav'>
            {data.technology.map((tech, i) => {
                return (
                  <button className={active === i ? 'tech-nav-btn active' : 'tech-nav-btn'} key={i} onClick={() => changeDest(i)}>{i+1}</button>
                )
              }
            )}
          </div>
          <div className='info'>
            <h4 className='sub'>The terminology...</h4>
            <h3 className='name'>{dataTechnology.name}</h3>
            <p className='desc'>{dataTechnology.description}</p>
          </div>
        </div>
      </div>

      <div className='r-container'>
        <img src={image} alt='technology' className='tech-image' />

        <img src={imageMob} alt='technology' className='tech-image mob' />
      </div>
    </>
  );
}

export default Technology;