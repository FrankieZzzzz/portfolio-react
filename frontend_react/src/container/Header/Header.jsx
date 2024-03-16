
import React, {useState, useEffect} from 'react'

import './Header.scss';
import '../Project/Project.scss'

import {useTypewriter} from 'react-simple-typewriter'
import {motion, useAnimation} from 'framer-motion';
import {images} from '../../constants';

// icon set
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight, faFile,faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faSquareBehance } from '@fortawesome/free-brands-svg-icons';

import {AppWrap} from '../../wrapper';
import pdfFile from '../../assets/Weini(Frankie)_Zhong_Resume_2024.pdf';

const Header = () => {
  // typewriter effect
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

  // show scroll up bar
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  useEffect(() => {
    const scrollUp = () => {
      if(window.scrollY >= 350){
        setBackToTopBtn(true)
      }else{
        setBackToTopBtn(false)
      }
    }
      window.addEventListener('scroll', scrollUp);
    return() => {
      window.addEventListener('scroll', scrollUp)
    };
  }, [])
  // back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <section className='app__headerBox' id='top'>
      {/* <div id='About' /> */}
      <div className='app__header app__flex' id='home'>
        {/* left side icon */}
        <div className='app_header-icon'>
          <ul>
              <li>
                <a href='https://github.com/FrankieZzzzz' target='_blank' rel='noreferrer'>
                  <button aria-label="Github" data-balloon-pos="right"><FontAwesomeIcon icon={faGithub} /></button>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/weinizhong73/' target='_blank' rel='noreferrer'>
                  <button aria-label="Linkedin" data-balloon-pos="right"><FontAwesomeIcon icon={faLinkedin} /></button>
                </a>
              </li>
              <li>
                <a href='https://www.behance.net/zhongweini0703' target='_blank' rel='noreferrer'>
                  <button aria-label="Behance" data-balloon-pos="right"><FontAwesomeIcon icon={faSquareBehance} /></button>
                </a>
              </li>
              <li>
                <a href={pdfFile} target="_blank" rel="noopener noreferrer">
                   <button aria-label="Resume" data-balloon-pos="right"><FontAwesomeIcon icon={faFile} /></button>
                </a>
              </li>
          </ul>
        </div>
        {/* scroll up btn */}
        <a className={`scrollup ${backToTopBtn ? 'show-scroll':''}`} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
        {/* left side icon */}
        {/* textcontent */}
        <motion.div 
          whileInView={{x:[-100,0],opacity:[0,1]}}
          transition={{duration: 0.8}}
          className='app_project-info' >
          <div className='app_project-title'>
            <div className='header-title app_flex'>
              <FontAwesomeIcon icon={faArrowRight} />
              <span className='p-text'>Hi, my name is</span>
            </div>
            <div className='header-content app__flex'>
              <h1 className='p-text'>Frankie Zhong</h1>
              <h2 className='p-text ' >I build things for <span>{typeEffect}</span></h2>
              <p>Hello! My name is Frankie and a passionate <span>Graphic Designer</span> and <span>Web Developer</span>. With a degree in <span>Art Design</span>, I've built a solid aesthetics and design foundation. Driven by my love for digital media and a commitment to continuous learning, I approach each project as a <span>proactive problem-solver</span>. Let's collaborate and bring innovative ideas to life!</p>
            </div>
          </div>
        </motion.div>
        {/* textcontent */}
        {/* image */}
        <motion.div 
          whileInView={{ opacity:[0,1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
          className='app_header-img' >
          <motion.img 
            whileInView={{ opacity:[0,1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.Frankie}
            className='image_profile' />
        </motion.div>
        {/* image */}
        {/* decoration image */}
        <div className='app_header-Deco'>
          <img src={images.Deco} className='image_deco' />
        </div>
      </div>
      {/* mobile about part */}
      <div id='app__header-mobile' className='app__header'>
        <div className='app_header-mobileText app_project-info' >
          <motion.div 
          
            className='header-title app_flex'>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className='p-text'>About</span>
          </motion.div>
          <motion.div
              whileInView={{opacity: [0,1]}} 
              transition={{ duration: 1, delayChildren: 1 ,ease: 'easeIn' }}
              className='app_mobileText-img'
              >
              <motion.img
                whileInView={{opacity: [0,1]}} 
                transition={{ duration: 0.65, ease: 'easeInOut'}}
                src={images.Frankie}
                className='image_profile'
              />
          </motion.div>
          <div className='header-content app__flex'>
              <p>Hello! My name is Frankie and a passionate <span>Graphic Designer</span> and <span>Web Developer</span>. With a degree in <span>Art Design</span>, I've built a solid aesthetics and design foundation. Driven by my love for digital media and a commitment to continuous learning, I approach each project as a <span>proactive problem-solver</span>. Let's collaborate and bring innovative ideas to life!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppWrap(Header, 'Header')
