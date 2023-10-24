import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {  Link as RouterLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleItemClick = () => {
    setMenuOpen(false)
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <nav className='navbar'>
      <div className='menu-icon' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className='nav-center'>
        <div className='nav-header'>
          <li>
            <RouterLink
              to='/'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              <div className='logo'>
                <img src={logo} alt='' />
              </div>
            </RouterLink>
          </li>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li className='nav-item'>
              <RouterLink
                to='/'
                onClick={() => {
                  scrollToTop()
                  handleItemClick()
                }}
                className={location.pathname === '/' ? 'active-link' : ''}
              >
                Home
              </RouterLink>
            </li>

            <li className='nav-item'>
              <RouterLink
                to='/services'
                onClick={() => {
                  scrollToTop()
                  handleItemClick()
                }}
                className={location.pathname === '/services' ? 'active-link' : ''}
              >
              services
              </RouterLink>
            </li>

            <li className='nav-item'>
              <RouterLink
                to='/work'
                onClick={() => {
                  scrollToTop()
                  handleItemClick()
                }}
                className={location.pathname === '/work' ? 'active-link' : ''}
              >
                Our Work
              </RouterLink>
            </li>
            <li className='nav-item'>
              <RouterLink
                to='/about'
                onClick={() => {
                  scrollToTop()
                  handleItemClick()
                }}
                className={location.pathname === '/about' ? 'active-link' : ''}
              >
                About
              </RouterLink>
            </li>
            <li className='nav-item'>
              <RouterLink
                to='/contact'
                onClick={() => {
                  scrollToTop()
                  handleItemClick()
                }}
                className={
                  location.pathname === '/contact' ? 'active-link' : ''
                }
              >
                Contact
              </RouterLink>
            </li>

            {location.pathname.startsWith('/services/') && (
              <li className='nav-item'>
                <RouterLink to='/' onClick={handleItemClick}>
                  Back to Menu
                </RouterLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
