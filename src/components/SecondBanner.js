import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faPencil,faU } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const SecondBanner = () => {
  return (
    <div className='second-banner section-center'>
      <div className='title'>
        <h3>Let's Dive Deeper...</h3>
      </div>
      <div className='second-banner-container'>
        <article className='second-banner-content'>
          <span className='icons'>
            <FontAwesomeIcon icon={faU} />
          </span>
          <h3>Get Traffic</h3>
          <p>
            Breaking News: Simply having a website doesn't guarantee traffic. To
            drive visitors to your site, you need to implement strategies like
            SEO, advertising, and other marketing channels.
          </p>
        </article>
        <article className='second-banner-content'>
          <span className='icons'>
            <FontAwesomeIcon icon={faLaptop} />
          </span>
          <h3>The Website</h3>
          <p>
            Surprisingly, a website alone doesn't solve everything. The strategy
            behind your website must align with the traffic you're attracting.
            Once these are in sync, we can proceed to the next stage.
          </p>
        </article>
        <article className='second-banner-content'>
          <span className='icons'>
            <FontAwesomeIcon icon={faPencil} />
          </span>
          <h3>Close the Deal</h3>
          <p>
            Everybody likes this part! We like to close deals. But, the stages
            that lead to this part are what makes this part smoother. Once you
            are positioned as the authority to your perfect prospect, this stage
            is easy.
          </p>
        </article>
      </div>
    </div>
  )
}

export default SecondBanner
