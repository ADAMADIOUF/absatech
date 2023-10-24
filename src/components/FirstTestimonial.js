import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const FirstTestimonial = () => {
  return (
    <div className='first-t '>
      <div className='container-first-t section-center'>
        <article className='first-t-details'>
          <span>
            <FaQuoteLeft />
          </span>
          <p>
            I had the pleasure of working with Absa Tech to build my website,
            and I couldn't be happier with the results. From the very beginning,
            they demonstrated a deep understanding of my vision and needs. Their
            expertise in web development and design is truly exceptional. Absa
            Tech and their team were not only professional but also highly
            creative, delivering a website that not only met but exceeded my
            expectations. The attention to detail, user experience, and
            aesthetics were spot-on. What truly impressed me was their
            commitment to communication and their dedication to ensuring my
            satisfaction throughout the process. They were responsive, patient,
            and went the extra mile to address my concerns and make any
            necessary adjustments. Thanks to Absa Tech, I now have a stunning
            website that perfectly represents my business. I've received
            numerous compliments from clients and partners, and I've seen a
            positive impact on my online presence. I highly recommend Absa Tech
            to anyone in need of top-notch web development services. Thank you,
            Absa Tech, for making my vision a reality!
          </p>
        </article>
        <article className='first-t-img'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKinC_2PArduELe8jY_lqNH6KSTevUMfPYKQ&usqp=CAU'
            alt=''
          />
          <p>Amadou Fall</p>
          <p className='first-t-start'>★★★★★</p>
          <button className='btn'>view project</button>
        </article>
      </div>
    </div>
  )
}

export default FirstTestimonial
