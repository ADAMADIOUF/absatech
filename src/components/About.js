import React from 'react'
import SecondBanner from './SecondBanner'
import Percentage from './Percentage'
import a from '../assets/about.png'
import AboutProgressBar from './AboutProgreesBar'

const About = () => {
  return (
    <div className='about section-center'>
      <SecondBanner />
      <div className='about-container'>
        <article className='about-details'>
          <h3>#1 Digital solution with 3 years of experience</h3>
          <p>
            Absatech is a trusted digital solution provider with a rich history
            of three years of experience. Our team brings a wealth of expertise
            to the digital landscape, offering innovative solutions to meet your
            unique needs. We're dedicated to delivering top-notch services that
            propel your business forward in the ever-evolving digital world.
            With Absatech, you can rely on a partner who understands your
            digital challenges and is committed to helping you succeed
          </p>
          <Percentage />
        </article>
        <article className='about-img'>
          <img src={a} alt='' />
        </article>
      </div>
      <AboutProgressBar/>
    </div>
  )
}

export default About
