import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>With a solid foundation in HTML, CSS, JavaScript, and modern frameworks, I love turning complex problems into elegant solutions.

Whether I’m building responsive websites, crafting sleek UI components, or collaborating on creative projects, my goal is always the same: to deliver clean, efficient, and visually compelling results.</p>
                    <p>I'm constantly learning, evolving, and pushing the boundaries of what I can create on the web.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>    HTML & CSS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>    React JS</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>    JavaScript</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>    Next JS</p><hr style={{width: "50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
                <hr />
                <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About