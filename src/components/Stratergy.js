import React from 'react'
import icons from "../assets/icons-strtegy.png"
import a from '../assets/s2.png'
import b from '../assets/flag.png'
import c from "../assets/database.png"
import d from '../assets/leaf.png'
import e from '../assets/us.png'
import f from '../assets/person.png'




const Stratergy = () => {
  return (
    <div className='strategy section-center'>
      <div className='title'>
        <h2>marketing automation</h2>
        <h2>strategy</h2>
      </div>
      <div className='container-strategy'>
        <article className='strategy-first-content'>
          <p>
            Don't be afraid of automation or strategy - we keep it simple:
            attract new leads, capture their info, nurture them, and then
            convert them. The process is simple and, with our strategy, the
            execution is simple as well.{' '}
          </p>
        </article>
        <article className='strategy-content'>
          <img src={icons} alt='' />
          <p>
            Getting leads can be one of the most difficult things for companies.
            Want to know what is harder? Attracting the perfect prospect. We
            help simplify this process by identifying who the perfect prospect
            is and then focusing on channels where we can find them. In the
            attract phase we work to provide consistency through all channels.{' '}
          </p>
        </article>
      </div>
      <div className='container-strategy'>
        <article className='strategy-first-content'>
          <button
            className='btn'
            onClick={() => (window.location = 'tel:+17015003259')}
          >
            Schedule Consultation
          </button>

          <div className='strategy-content-two'>
            <img src={a} alt='' />
          </div>
        </article>
        <article className='strategy-content'>
          <img src={b} alt='' />
          <p>
            Getting the phone number seems to be one of the hardest things to do
            no matter where you are in life. It makes no sense to attract all
            this traffic to your website and then not capture the details! All
            that work for nothing?! Our process includes certain strategies that
            are proven to get the details of website visitors or go find those
            people. 97% of the people that go to your website won't be back. We
            work to get the 97% back.
          </p>
        </article>
      </div>
      <div className='container-strategy'>
        <article className='strategy-first-content'>
          <div className='strategy-content-two'>
            <img src={c} alt='' />
          </div>
        </article>
        <article className='strategy-content'>
          <img src={d} alt='' />
          <p>
            Have your ever looked at the potential revenue you could make and
            then never see it happen? Yeah, we have all been there and it never
            makes us feel good. Our goal is not to just have a bunch of
            prospects sitting in a CRM or database, but actually, and
            strategically, nurture these prospects into take the next step with
            your company - whatever that might be.
          </p>
        </article>
      </div>
      <div className='container-strategy'>
        <article className='strategy-first-content'>
          <div className='strategy-content-two'>
            <img src={e} alt='' />
          </div>
        </article>
        <article className='strategy-content'>
          <img src={f} alt='' />
          <p>
            To be honest, this is where you come in. We help get you to the
            point of the sell but we believe that you, as the business owner,
            marketing manager, or salesperson, are most qualified to ensure that
            your leads get closed properly and on-time. We provide you the tools
            to make sure it happens and are with you every step of the way!
          </p>
        </article>
      </div>
    </div>
  )
}

export default Stratergy
