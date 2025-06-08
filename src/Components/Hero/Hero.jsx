import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Alex Bennet,</span> frontend developer based in USA.</h1>
        <p>I’m passionate and detail-oriented web developer with a strong focus on creating beautiful, functional, and user-friendly digital experiences. I specialize in front-end development, blending creativity with code to bring ideas to life. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero