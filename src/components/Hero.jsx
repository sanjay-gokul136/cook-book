import React from 'react'
import '../styles/Hero.css'
import heroImg1 from '../images/Biriyani.jpg'
import heroImg2 from '../images/Pastha.jpg'
import heroImg3 from '../images/seafood.jpg'
import heroImg4 from '../images/Greens.jpg'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-images">
            <span className='span1'>
              <img src={heroImg2} alt="" />
              <img src={heroImg4} alt="" />
            </span>
            <span className='span2'>
              <img src={heroImg3} alt="" />
              <img src={heroImg1} alt="" />
            </span>
        </div>
        <div className="hero-text">
              <div className="hero-line" />
              <h1>Discover delicious recipes for every occasion..</h1>
              <p>Ready to Revitalise your taste buds? Dive into our endless recipe library and find your next food adventure.</p>
              <a href="#recipies"><button>Guide To The Vault OF Recipies</button></a>
        </div>
        
    </div>
  )
}

export default Hero