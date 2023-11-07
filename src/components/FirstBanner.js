import React from 'react'

const FirstBanner = () => {
  return (
    <div className='first-banner'>
      <div className='first-banner-details section-center'>
        <h3 className='happy-to-help'>absa tech <span>happy to help</span></h3>
        <div className='text-scrolling'>
          <article className='banner-text'>
            <h3>Transform Your Online Presence</h3>
            <h2>Expert Web Development Tailored for Your Business</h2>
          </article>
        </div>
        <article>
          <button className='btn first-banner-btn'>
            Discover Our Solutions
          </button>
        </article>
      </div>
    </div>
  )
}

export default FirstBanner
