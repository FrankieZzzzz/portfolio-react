import React from 'react'
import './Navbar.scss'
import { images } from '../../constants';


const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.Logo} alt="logo" />
      </div>
      <ul>
        {['About','Work','Experience','Contact'].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#$item`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
