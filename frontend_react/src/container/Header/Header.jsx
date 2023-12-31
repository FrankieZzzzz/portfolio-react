import React, { useEffect } from 'react'
import './Header.scss';

import {useTypewriter} from 'react-simple-typewriter'
import {motion, useAnimation} from 'framer-motion';
import {images} from '../../constants';

// icon set
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faSquareBehance } from '@fortawesome/free-brands-svg-icons';

import {AppWrap} from '../../wrapper';

// import {MotionWrap} from '../../wrapper'

const Header = () => {
  const [typeEffect] = useTypewriter({
    words: ['the web', 'graphic design', 'user experience', 'my passion', 'human'], 
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  const controls = useAnimation();
  useEffect(() => {
    controls.start({x: 0, opacity:1});}
    , [controls]);

  return (
    <section className='app__headerBox' >
      <div id='About' />
      <div className='app__header app__flex' id='home'>
        {/* left side icon */}
        <motion.div
          whileInView={{x:[-50,0],opacity:[0.5,1]}}
          transition={{duration: 0.4}}
          animate= {controls}
          className='app_header-icon'
        >
          <ul>
              <li>
                <a href='https://github.com/FrankieZzzzz' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/weinizhong73/' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href='https://www.behance.net/zhongweini0703' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faSquareBehance} />
                </a>
              </li>
              <li>
                <a href='mailto:zhongweini0703@gmail.com' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a href='https://app.netlify.com/teams/frankiezzzzz/overview' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faCircleNodes} />
                </a>
              </li>
          </ul>
        </motion.div>
        {/* left side icon */}
        {/* textcontent */}
        <motion.div
          whileInView={{x:[-100,0],opacity:[0,1]}}
          transition={{duration: 0.8}}
          className='app_project-info'
        >
          <div className='app_project-title'>
            <div className='header-title app_flex'>
              <FontAwesomeIcon icon={faArrowRight} />
              <span className='p-text'>Hi, my name is</span>
            </div>
            <div className='header-content app__flex'>
              <h1 className='p-text'>Frankie Zhong</h1>
              <h2 className='p-text ' >I build things for {typeEffect}</h2>
              <p>Hello! My name is Frankie and I'm a dedicated UX Designer and Front-End Developer with a profound passion for the design industry. I've built a strong foundation in aesthetics and design through my Art Design degree. Fuelled by a love for digital media and an unwavering commitment to continuous learning, I approach each project as a proactive problem-solver. Let's collaborate and bring innovative ideas to life!</p>
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
          
          <motion.img
            whileInView={{ scale:[0,1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.Deco}
            className='image_deco'
          />
        </motion.div>
      </div>
      <div id='app__header-mobile' className='app__header'>
        <motion.div
          whileInView={{x:[-100,0],opacity:[0,1]}}
          transition={{duration: 0.8}}
          className='app_header-mobileText'
        >
          <div className='header-title app_flex'>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className='p-text'>About</span>
          </div>
          <motion.div
              whileInView={{ opacity:[0,1] }}
              transition={{ duration: 0.8, delayChildren: 0.5 }}
              className='app_mobileText-img'
              >
              <motion.img
                whileInView={{ scale:[0,1] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                src={images.Frankie}
                className='image_profile'
              />
          </motion.div>
          <div className='header-content app__flex'>
            <p>Hello! My name is Frankie and I'm a dedicated UX Designer and Front-End Developer with a profound passion for the design industry. I've built a strong foundation in aesthetics and design through my Art Design degree. Fuelled by a love for digital media and an unwavering commitment to continuous learning, I approach each project as a proactive problem-solver. Let's collaborate and bring innovative ideas to life!</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppWrap(Header, 'Header')
