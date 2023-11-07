import React from 'react'
import Header from './Header'
import FirstBanner from './FirstBanner'
import SecondBanner from './SecondBanner'
import ThirdBanner from './ThirdBanner'
import FirstTestimonial from './FirstTestimonial'
import Stratergy from './Stratergy'
import NextStep from './NextStep'
import b from '../assets/a5.png'
import { Parallax } from 'react-parallax'
const Home = () => {
  return (
    <div>
      <Header />
      <FirstBanner />
      <div>
        <Parallax bgImage={b} strength={500}>
          <div style={{ height: 1000 }}></div>
        </Parallax>
      </div>
      <SecondBanner />
      <ThirdBanner />
      <FirstTestimonial />
      <Stratergy />
      <NextStep />
    </div>
  )
}

export default Home
