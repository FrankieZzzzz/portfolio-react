import React from 'react'
import './Navbar.scss'
import { images } from '../../constants';


const Navbar = () => {
  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.Logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['About','Work','Experience','Contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#$item`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
