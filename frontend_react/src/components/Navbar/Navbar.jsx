import React, {useState, useEffect} from 'react'
import './Navbar.scss'
import { images } from '../../constants';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >=50){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`app__navbar ${isScrolled ? 'shadow-header':""}`} >
      <div className='app__navbar-logo'>
        <img src={images.Deco} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['About','Project','Skills','Contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      {/* side menu on mobile */}
      <div className='app__navbar-menu'>
          <FontAwesomeIcon icon={faBars} onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}>
              <FontAwesomeIcon icon={faXmark} onClick={() => setToggle(false)} />
              <ul>
                {['About','Project','Skills','Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar
