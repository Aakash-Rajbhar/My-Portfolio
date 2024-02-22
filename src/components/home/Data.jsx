import React from 'react'
import hand from '../../assets/hand.svg'
import send from '../../assets/send.svg'

const Data = () => {
  return (
    <div className="home__data">
        <h2 className="home__title">Aakash Rajbhar <img src={hand} alt="hand" /></h2>
        <h3 className='home__subtitle'>Web Developer</h3>
        <p className="home__description">
        I am a web developer who is always eager to learn and grow in the tech world.
        </p>

        <a href="#contact" className="button button-flex"> Say Hello <img src={send} alt="" /> </a>
        
    </div>
  )
}

export default Data
