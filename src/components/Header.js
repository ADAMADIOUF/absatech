import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className='header-content section-nav'>
        <h3>
          We assist organizations in their journey toward improvement
        </h3>
        <h2 className='typing-animation'>By Embracing Uniqueness</h2>
        <p className='back-and-forth'>
          Automation may sound intimidating, but let's simplify it. You excel in
          your business for a reason – your expertise. We're here to simplify
          your operations, so you can focus on what you do best without worrying
          about where the next opportunity will come from.
        </p>
        <button className='btn'>
          <Link to={`/contact`}>get started</Link>
        </button>
      </div>
    </div>
  )
}

export default Header
