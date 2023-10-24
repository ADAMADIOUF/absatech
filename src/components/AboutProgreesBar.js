import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { FaUsers, FaSmile, FaClipboardCheck, FaBriefcase } from 'react-icons/fa'

const AboutProgressBar = () => {
  const [count, setCount] = useState(false)

  return (
    <section className='section-center progress-about'>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className='progress-bar-container'>
          <div className='progress-about-content'>
            <span className='icon'>{count && <FaUsers />}</span>
            <h1>
              {count && <CountUp start={0} end={3} duration={2} delay={0} />}
            </h1>
            <span>Years Experience</span>
          </div>
          <div className='progress-content'>
            <span className='icon'>{count && <FaSmile />}</span>
            <h1>
              {count && <CountUp start={0} end={8} duration={2} delay={0} />}
            </h1>
            <span>Team Members</span>
          </div>
          <div className='progress-content'>
            <span className='icon'>{count && <FaClipboardCheck />}</span>
            <h1>
              {count && <CountUp start={0} end={24} duration={2} delay={0} />}
            </h1>
            <span>Satisfied Clients</span>
          </div>
          <div className='progress-content'>
            <span className='icon'>{count && <FaBriefcase />}</span>
            <h1>
              {count && <CountUp start={0} end={24} duration={2} delay={0} />}
            </h1>
            <span>Completed Projects</span>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  )
}

export default AboutProgressBar
