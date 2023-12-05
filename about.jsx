import React from 'react'
import photo from '../../assets/about.jpg';
import './about.css'
const About = () => {
  return (
    <div className="about">
        <div className="abt">
            <div className="note">
            <div className="who_i_am">
                <h1 >About me</h1>
                
            </div>
            <div className="abt_me">
                <ul>
                    <li><span id='span'>Name: </span><span>Elias Worku</span></li>
                    <li>
                        <span id='span'>Date of birth:</span><span>August 07, 1998</span>
                    </li>
                    <li><span id='span'>Address:</span><span>Ethiopia, Addis abeba</span></li>
                    <li><span id='span'>Phone:</span><span>+251926151903</span></li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet consectetur <br />
                 adipisicing elit. Suscipit nostrum vitae cupiditate magni qui quasi deserunt <br />
                     sequi sit corporis dolore ea cum assumenda voluptates nulla eos, ab at ad doloremque?
                </p>
            </div>
        <div className="cv">
            <button id='btn'>Download CV </button>
        </div>
        </div>
        <div className="photo">
            <img src={photo} alt="" />
        </div>
        </div>
        
        

    </div>
  )
}

export default About