import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Have Open Talks </h1>
      <p>About Anything You Want</p>
      <p>Just a Tap Away</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          JOIN NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;