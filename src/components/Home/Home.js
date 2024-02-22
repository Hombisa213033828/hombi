import React from 'react';
import './Home.css';
import myImage from './images/Hombi.png';
import myCV from './CV/CV.jpg';

export default function Home() {
  return (

<section id='home'>

    <div className='home-page'>
      <div className='hero-left'>
        <img src={myImage} alt='My Image' className='my-image' />
        <h2>HOMBISA DYASI</h2>
        <div className='home-button'>
          <button>BA/J Software Developer</button>
        </div>

        <div className='home-icons'>
  <a href="https://www.linkedin.com/in/hombisa-dyasi-5449b4232/" target="_blank" rel="noopener noreferrer">
    <i id="linkedin" className="fa-brands fa-linkedin"></i>
  </a>
  <a href="https://www.facebook.com/hombisa.mdubeki?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
    <i id="facebook" className="fa-brands fa-square-facebook"></i>
  </a>
  <a href="https://www.github.com/your-profile" target="_blank" rel="noopener noreferrer">
    <i id="github" className="fa-brands fa-square-github"></i>
  </a>
</div>

        <div className='home-resume-button'>
          <a href={myCV} target="_blank" download>
            <button>
              <i className="fa-solid fa-download"></i> Download Cv
            </button>
          </a>

        </div>
      </div>
        

        
      <div className='hero-right'>
        <h4 className='about-me-text'><span className='text-color'>About<hr className='underline' /> Me </span></h4>
        <p id='text'>
          With a strong foundation in both business analysis and software development, I bring a versatile skill set that enables me to seamlessly bridge the gap between technical intricacies and business objectives. My experience is rooted in optimizing processes and fostering effective decision-making within project management, where I excel at harmonizing diverse perspectives.
        </p>
        <p id='text'>
          In the realm of business analysis, I possess a keen ability to identify and address crucial business needs. My proficiency extends to data analysis, enabling me to provide valuable insights that inform strategic decision-making. On the software development front, I am adept at navigating programming languages, crafting robust software designs, and implementing solutions tailored to meet specific business requirements.
        </p>
        <p id='text'>
          I take pride in contributing to projects that make a meaningful impact, and I am eager to bring my blend of technical acumen and business insights to future endeavors. By leveraging my unique skill set, I am confident in my ability to navigate the complexities of modern project management, ensuring the successful realization of technical and business objectives.
        </p>
      </div>
    </div>
</section>  
  );
}
