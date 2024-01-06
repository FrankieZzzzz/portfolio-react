import React, { useState, useEffect } from 'react'
import '../Project/Project.scss'
import './Footer.scss';

import {AppWrap} from '../../wrapper';
import { images } from '../../constants';
import  {motion} from 'framer-motion';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faCircleNodes, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faSquareBehance } from '@fortawesome/free-brands-svg-icons';

import { client } from '../../client'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) =>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleChangeSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
     .then(() => {
        setLoading(false);
        setIsFormSubmitted(true)
     })
  }

  return (
    <div className='app__footer'>
      {/* title */}
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration: 0.8}}
        className='app_project-info'
      >
        <div className='project-title'>
          <div className='header-title '>
              <FontAwesomeIcon icon={faArrowRight} />
              <span className='p-text'>What's Nest?</span>
          </div>
        </div>
      </motion.div>
      {/* form */}
      {!isFormSubmitted ?
        <div className='app__footer-cards'>
          {/* left side text */}
          <div className='app__footer-card'>
            <h5>Keep in touch</h5>
            <p>Start a conversation</p>
            <a href='mailto:zhongweini0703@gmail.com' className='p-text'>zhongweini0703@gmail.com</a>
          </div>
          {/* form */}
          <div className='app__footer-form app__flex'>
            <div className='input-box'>
              <label for='name' autocomplete="on">Name</label>
              <input className='p-text' type="text" name="name" value={name} onChange={handleChangeInput} id='name' required/>
            </div>
            <div className='input-box'>
              <label for='email'>Email</label>
              <input className='p-text' type="email" name="email" value={email} onChange={handleChangeInput} id='email' required/>
            </div>
            <div className='input-box'>
              <label for='message'>Message</label>
              <input className='p-text' type="text" name="message" value={message} onChange={handleChangeInput} id='message' />
            </div>
            <button type='button' className='p-text'onClick={handleChangeSubmit}>{loading ? 'Sending' : 'Send Message'}<span><FontAwesomeIcon icon={faArrowRight} /></span></button>
          </div>
        </div>
        : 
        <div>
          <h3>Thank you for getting in touch with me!</h3>
        </div>
      }
      {/* bottom icon */}
      <motion.div
        whileInView={{x:[-50,0],opacity:[0.5,1]}}
        transition={{duration: 0.4}}
        className='app__footer-bottomBox'
      >
        <button>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>

        <motion.div
          whileInView={{x:[-50,0],opacity:[0.5,1]}}
          transition={{duration: 0.4}}
          className='app__footer-icon'
        >
          <ul>
              <li>
                <a href='https://github.com/FrankieZzzzz'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href='https://github.com/FrankieZzzzz'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href='https://github.com/FrankieZzzzz'>
                  <FontAwesomeIcon icon={faSquareBehance} />
                </a>
              </li>
              <li>
                <a href='https://github.com/FrankieZzzzz'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a href='https://github.com/FrankieZzzzz'>
                  <FontAwesomeIcon icon={faCircleNodes} />
                </a>
              </li>
            </ul>
        </motion.div>
        <motion.div>
          <p>Loosely designed in Figma and coded in Visual Studio Code. Open sourced on <a href='https://github.com/FrankieZzzzz' target='_black' rel='referrence'>GitHub</a> and deployed with Netlify</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Footer, 'Footer')