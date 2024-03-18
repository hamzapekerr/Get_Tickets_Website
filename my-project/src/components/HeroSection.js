import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="./videos/video-2.mp4" autoPlay loop muted></video>
      <h1>TUM DUNYAYA BILET SATIYORUZ</h1>
      <p>SEN NE BEKLIYORSUN?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
          buttonSize='btn--large'>
          HADI BILET AL
        </Button>
        <Button className='btns' buttonStyle='btn--primary'
          buttonSize='btn--large'>
          IZLE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;