import React from 'react'
import './Header.scss';

import  {motion} from 'framer-motion';
import {images} from '../../constants';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from '@fortawesome/free-brands-svg-icons';

// const scaleVariants = {
//     whileInView: {
//       opacity: [0,1],
//       transition: {
//         duration:1,
//         ease: 'easeInOut',
//         scale: [0,1]
//       }
//     }
//   }

const Header = () => {
  
  return (
    <div className='app__header app__flex' id='home'>
      {/* left side icon */}
      <motion.div
        whileInView={{x:[-50,0],opacity:[0.5,1]}}
        transition={{duration: 0.4}}
        className='app_header-icon'
      >
        <ul>
            <li>
              <a href='https://github.com/FrankieZzzzz'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href='https://github.com/FrankieZzzzz'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href='https://github.com/FrankieZzzzz'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href='https://github.com/FrankieZzzzz'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
           
          </ul>
      </motion.div>
      {/* left side icon */}
      {/* textcontent */}
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration: 0.8}}
        className='app_header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app_flex'>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className='p-text'>Hi, my name is</span>
          </div>
          <div className='tag-cmp app__flex'>
            <h1 className='p-text'>Frankie Zhong</h1>
            <h2 className='p-text ' >I build things for the web</h2>
            <p>Hello! My name is Frankie and I'm a dedicated UX Designer and Front-End Developer with a profound passion for the design industry. Let's collaborate and bring innovative ideas to life!</p>
          </div>
        </div>
      </motion.div>
      {/* textcontent */}
      {/* image */}

      <motion.div
          whileInView={{ opacity:[0,1] }}
          transition={{ duration: 0.8, delayChildren: 0.5 }}
          className='app_header-img'
      >
        <motion.img
          whileInView={{ scale:[0,1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.Frankie}
          className='image_profile'
        />
      </motion.div>
      {/* image */}
      {/* decoration image */}
       <motion.div
          whileInView={{ opacity:[0,1] }}
          transition={{ duration: 0.8, delayChildren: 0.5 }}
          className='app_header-Deco'
      >
        {/* <img src={images.Frankie} alt='image_profile'/> */}
        <motion.img
          whileInView={{ scale:[0,1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.Deco}
          className='image_deco'
        />
      </motion.div>
    </div>
  )
}

export default Header