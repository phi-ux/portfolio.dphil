import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home'className='hero'>
        <img src={profile_img} alt="Alex Bennet profile" />
        <h1><span>I'm Alex Bennet,</span> <br /> frontend developer based in USA.</h1>
        <p>I'm passionate and detail-oriented web developer with a strong focus on creating beautiful, functional, and user-friendly digital experiences. I specialize in front-end development, blending creativity with code to bring ideas to life. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className = 'anchor-link' offset = {50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero