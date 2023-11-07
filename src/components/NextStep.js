import React from 'react'
import a from "../assets/service.png"
import b from '../assets/contact.png'
import c from '../assets/dev.png'
import { Link } from 'react-router-dom'


const NextStep = () => {
  return (
    <div className='next-step section-center'>
      <div className='title '>
        <h2>Get Started</h2>
        <h3>Next Steps...</h3>
        <p>
          You are on the verge of transforming your business. Check out one of
          our three easy next steps to get started on this journey.
        </p>
      </div>
      <div className='next-step-options'>
        <div className='next-step-option'>
          <img src={a} alt='' className='next-step-img' />
          <h4>1. Explore Our Services</h4>
          <p>
            Discover a wide range of services including e-commerce solutions,
            email marketing, and more. Find out how we can help your business
            thrive.
          </p>
          <button className='btn'>
            <Link to={`/services`}>services</Link>
          </button>
        </div>
        <div className='next-step-option'>
          <img src={b} alt='' className='next-step-img' />
          <h4>2. Contact Us</h4>
          <p>
            Have questions or need personalized guidance? Reach out to our
            expert team. We're here to assist you every step of the way.
          </p>
          <button className='btn'>
            <Link to={`/contact`}>contact us</Link>
          </button>
        </div>
        <div className='next-step-option'>
          <img src={c} alt='' className='next-step-img' />
          <h4>3. Get Started Today</h4>
          <p>
            Ready to take action? Let's begin the journey of transforming your
            business. Get in touch with us and start achieving your goals.
          </p>
          <button
            className='btn'
            onClick={() => (window.location = 'tel:+17015003259')}
          >
            get started
          </button>
        </div>
      </div>
    </div>
  )
}

export default NextStep
