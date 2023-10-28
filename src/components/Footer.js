import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaTiktok, FaPlane } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container section-center'>
        <div className='footer-container-two'>
          <article className='footer-address'>
            <p className='section-title text-white h5 mb-4'>
              Address<span className='footer-dash'>--</span>
            </p>
            <p>
              <span>
                <FaMapMarkerAlt />
              </span>
              123 Street, New York, USA
            </p>
            <p>
              <span>
                <FaPhoneAlt />
              </span>
              +012 345 67890
            </p>
            <p>
              <span>
                <FaEnvelope />
              </span>
              info@example.com
            </p>
            <div className='footer-links'>
              <a className='btn btn-outline-light btn-social' href=''>
                <span>
                  <FaTwitter />
                </span>
              </a>
              <a className='btn btn-outline-light btn-social' href=''>
                <span>
                  <FaFacebook />
                </span>
              </a>
              <a className='btn btn-outline-light btn-social' href=''>
                <span>
                  <FaInstagram />
                </span>
              </a>
              <a className='btn btn-outline-light btn-social' href=''>
                <span>
                  <FaTiktok />
                </span>
              </a>
            </div>
          </article>
          <article className='footer-links-menu'>
            <p className='section-title text-white h5 mb-4'>
              Quick Link<span className='footer-dash'>--</span>
            </p>
            <a className='btn btn-link' href=''>
              About Us
            </a>
            <a className='btn btn-link' href=''>
              Contact Us
            </a>
            <a className='btn btn-link' href=''>
              Privacy Policy
            </a>
            <a className='btn btn-link' href=''>
              Terms & Condition
            </a>
            <a className='btn btn-link' href=''>
              Career
            </a>
          </article>

          <article className='footer-newsletter'>
            <p className='section-title text-white h5 mb-4'>
              Newsletter<span className='footer-dash'>--</span>
            </p>
            <p>Stay in the Loop with Our Newsletter</p>
            <form className='form-footer'>
              <input
                className='form-control border-0 rounded-pill w-100 ps-4 pe-5'
                type='text'
                placeholder='Your Email'
                style={{ height: '48px' }}
              />
              <button
                type='button'
                className='btn shadow-none position-absolute top-0 end-0 mt-1 me-2'
              >
                <span>
                  <FaPlane />
                </span>
              </button>
            </form>
          </article>
        </div>
      </div>
      <div className='container-copyright'>
        <div className='copyright'>
          <div className='copy-content'>
            <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
              &copy;{' '}
              <a className='border-bottom' href='#'>
                absatech
              </a>
              , All Right Reserved. Designed By{' '}
              <a className='border-bottom' href='https://htmlcodex.com'>
                absatech.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
