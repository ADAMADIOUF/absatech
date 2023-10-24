import React from 'react'

import a from "../assets/t1.png"
import b from '../assets/t2.png'
import c from '../assets/t3.png'
import d from '../assets/t4.png'
import e from '../assets/t5.png'
import f from '../assets/t6.png'
import g from '../assets/tt7.png'
import h from '../assets/t8.png'
import i from '../assets/t9.png'
const ThirdBanner = () => {
  return (
    <div className='third-banner section-center'>
      <div className='title'>
        <h3>Let's Walk Through the Steps...</h3>
      </div>
      <div className='timeline'>
        <div className='third-banner-container left-container'>
          <img src={a} alt='' className='third-banner-icons' />

          <div className='text-box'>
            <h2>Google Ready</h2>
            <p>
              Google is the #1 search engine in the world. Is your company
              optimized? This goes beyond just your website and includes your
              social media profiles.
            </p>
          </div>
        </div>
        <div className='third-banner-container right-container'>
          <img src={b} alt='' className='third-banner-icons' />
          <div className='text-box'>
            <h2>Authority</h2>
            <p>
              People need to trust you. You build authority through your blog,
              social media, and your brand.
            </p>
          </div>
        </div>
        <div className='third-banner-container left-container'>
          <img src={c} alt='' className='third-banner-icons' />
          <div className='text-box'>
            <h2>Sales Kit</h2>
            <p>
              You need to have an optimized Sales Funnel in order to stand a
              chance. Is the information you are presenting going to actually
              convert? Is it speaking to your prospects pain points?
            </p>
          </div>
        </div>
        <div className='third-banner-container right-container'>
          <img src={d} alt='' className='third-banner-icons' />
          <div className='text-box'>
            <h2>3 Offers</h2>
            <p>
              You have the prospect on your site, but how do they actually
              become a client? Through 3 offers on every page: a cold, warm, and
              hot offer.
            </p>
          </div>
        </div>
        <div className='third-banner-container left-container'>
          <img src={e} alt='' className='third-banner-icons' />
          <div className='text-box'>
            <h2>Our 3 P Formula</h2>
            <p>
              Every page on your website must call out your PERFECT Prospect,
              target their PAIN Point, and PROMISE a solution. How does your
              website rate?
            </p>
          </div>
        </div>
        <div className='third-banner-container right-container'>
          <img src={f} alt='' className='third-banner-icons' />
          <div className='text-box'>
            <h2>Lead Kit</h2>
            <p>
              A fantastic way of showing the value your will bring is by giving
              the prospect something that can help them...like a blueprint,
              ebook, or something else they will find useful.
            </p>
          </div>
        </div>
        <div className='third-banner-container left-container'>
          <img src={g} alt='' className='third-banner-icons' />
          <div className='text-box'>
            <h2>Automation Platform</h2>
            <p>
              Don't have time? That is why you use a marketing automation
              platform that takes care of all this for you. We are partial to
              launchcrm.co
            </p>
          </div>
        </div>
        <div className='third-banner-container right-container'>
          <img src={h} alt='' className='third-banner-icons' />
          <div className='text-box'>
            <h2>Booking Engine</h2>
            <p>
              What good is all of this if you don't actually get an appointment?
              We use a custom booking engine that will help convert these
              prospects into appointments on your calendar. Easy.
            </p>
          </div>
        </div>
        <div className='third-banner-container left-container'>
          <img src={i} alt='' className='third-banner-icons' />
          <div className='text-box'>
            <h2>Retargeting Kit</h2>
            <p>
              Sometimes prospects visit your site and don't convert. That is
              fine. Follow up with using retargeting tools through Facebook to
              close the deal.
            </p>
          </div>
        </div>
      </div>
      <button className="btn btn-timeline">schedule consultation</button>
    </div>
  )
}

export default ThirdBanner
