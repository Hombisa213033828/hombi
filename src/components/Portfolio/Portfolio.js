import React from 'react';
import './Portfolio.css';
import TutorImg from './images/ci.jpg';
import GadgetImg from './images/gb.jpg';

export default function Portfolio() {
  return (
    <div className='portfolio-page'>
      <h3 id='portfolio-title'>Portfolio</h3>
      <div className='portfolio-container'>
        <div className='left-box'>
          <a href='https://creativetutorials.netlify.app/'>
            <img src={TutorImg} id='' alt='projects'/>
            <h3>Link to project</h3>
          </a>
        </div>
        <div className='right-box'>
          <a href='https://gadget-borrow-website.netlify.app/'>
            <img src={GadgetImg} id='' alt='projects'/>
            <h3>Link to project</h3>
          </a>
        </div>
      </div>
      <h3 id='skills-title'>Skills</h3>
      <div className='skills'>
        <div className='skill'>
          <h2>HTML</h2>
          <div className='progress'>
            <div className='progress-bar' style={{ width: '70%' }}>70%</div>
          </div>
        </div>
        <div className='skill'>
          <h2>SQL</h2>
          <div className='progress'>
            <div className='progress-bar' style={{ width: '50%' }}>50%</div>
          </div>
        </div>
      </div>
      <div className='skills-sec'>
        <div className='skill'>
          <h2>ANALYTICAL</h2>
          <div className='progress'>
            <div className='progress-bar' style={{ width: '70%' }}>70%</div>
          </div>
        </div>
        <div className='skill'>
          <h2>CSS</h2>
          <div className='progress'>
            <div className='progress-bar' style={{ width: '50%' }}>50%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
