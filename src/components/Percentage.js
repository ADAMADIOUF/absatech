import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const ProgressBar = () => {
  const [count, setCount] = useState(false)

  useEffect(() => {
    
    const loadingTimer = setTimeout(() => {
      setCount(true)
    }, 2000) 

    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (
    <section className='progress-content'>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className='progress-bar'>
          <article>
            <h3>
              {count && <CountUp start={0} end={85} duration={2} delay={0} />}%
            </h3>
            <span>Digital Marketing</span>
            <div className={`progress bg1 ${count ? 'animate' : ''}`}></div>
          </article>
          <article>
            <h3>
              {count && <CountUp start={0} end={90} duration={2} delay={0} />}%
            </h3>
            <span>SEO & Backlinks</span>
            <div className={`progress bg2 ${count ? 'animate' : ''}`}></div>
          </article>
          <article>
            <h3>
              {count && <CountUp start={0} end={95} duration={2} delay={0} />}%
            </h3>
            <span>Design & Development</span>
            <div className={`progress bg3 ${count ? 'animate' : ''}`}></div>
          </article>
          <button className='btn btn-about'>contact us</button>
        </div>
      </ScrollTrigger>
    </section>
  )
}

export default ProgressBar
