import React from 'react'
import './Home.css'
import myImage from './images/Hombi.png'

export default function Home() {
  return (
    <div className='home-page'>
        <div className='hero-left'>
            <img src={myImage} alt='My Image' className='my-image' />
            <h2>HOMBISA DYASI</h2>
            <div className='home-button'>
                <button>BA/J Software Developer</button>
            </div>

            <div className='home-icons'>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-github"></i>
            </div>

            <div className='home-resume-button'>
                <button> <i class="fa-solid fa-download"></i> Resume</button>
            </div>
        </div>

        <div className='hero-right'>
            <h4 className='about-me-text'><span className='text-color'>About<hr className='underline' /> Me </span></h4>
            <p id='text'>
            With a strong foundation in both business analysis  and software development,  I 
            bring a versatile skill set that enables me to  seamlessly bridge  the gap between
            technical intricacies and business objectives.  My experience is rooted in optimizing
            processes and fostering effective decision-making within project management, where
            I excel at harmonizing diverse perspectives.
            </p>
            <p id='text'>
            In the realm of business analysis, I possess a keen ability to identify  and address crucial business needs.  My proficiency extends to  data analysis, enabling me to provide valuable insights that inform strategic decision-making. 
            On the software development front, I am adept at navigating programming  languages,
            crafting robust software designs, and implementing solutions tailored to meet specific  business requirements.
            </p>
            <p id='text'>
            I take pride in contributing  to projects that make a meaningful impact, and I  am  eager to bring my blend of technical acumen and business insights  to future endeavors. By leveraging my unique skill set, I am  confident in my ability to  navigate 
            the complexities of modern project management, ensuring the successful realization  of technical and business objectives. 
            </p>
        </div>
    </div>
  )
}
