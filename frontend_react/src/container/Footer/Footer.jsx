import React, { useState } from 'react'
import '../Project/Project.scss'
import './Footer.scss';

import {AppWrap} from '../../wrapper';
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

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }
 
  if (contact.name || contact.email) {
    setIsFormSubmitted(true)
    setLoading(true);

    client.create(contact)
      .then(() => {
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error creating contact:', error);
      setLoading(false);
    });
  }else{
    setIsFormSubmitted(false);

  }
}


  return (
    <div className='app__footer ' id='Contact'>
      {/* title */}
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration: 0.8}}
        className='app_project-info'
      >
        <div className='app_project-title'>
          <div className='header-title '>
              <FontAwesomeIcon icon={faArrowRight} />
              <span className='p-text'>What's Next?</span>
          </div>
        </div>
      </motion.div>
      {/* form */}
      <div className='app__footer-box'>
        <div className='app__footer-card'>
          <h5>Keep in touch</h5>
          <p>Start a conversation</p>
          <a href='mailto:zhongweini0703@gmail.com' className='p-text'>zhongweini0703@gmail.com</a>
        </div>
        {!isFormSubmitted ? (
        <div className='app__footer-form '>
          <div className='input-box'>
            <label for='name' autoComplete="on">Name *</label>
            <input className='p-text' type="text" name="name" value={name} onChange={handleChangeInput} id='name' required/>
          </div>
          <div className='input-box'>
            <label for='email'>Email *</label>
            <input className='p-text' type="email" name="email" value={email} onChange={handleChangeInput} id='email' required/>
          </div>
          <div className='input-box'>
            <label for='message'>Message</label>
            <input className='p-text' type="text" name="message" value={message} onChange={handleChangeInput} id='message' />
          </div>
          <button type='button' className='p-text'onClick={handleChangeSubmit}>{loading ? 'Sending' : 'Send Message'}<span><FontAwesomeIcon icon={faArrowRight} /></span></button>
        </div>
        ) : (
        <div className='app__footer-message'>
          <div>👋<span>Thank you for getting in touch with me!</span></div>
        </div>
        )}
      </div>
      {/* bottom icon */}
      <motion.div
        whileInView={{x:[-50,0],opacity:[0.5,1]}}
        transition={{duration: 0.4}}
        className='app__footer-bottomBox'
      >
        <a href='#About' className='app__footer-backToTop'><button><FontAwesomeIcon icon={faArrowUp} /></button></a>

        <motion.div
          whileInView={{x:[-50,0],opacity:[0.5,1]}}
          transition={{duration: 0.4}}
          className='app__footer-icon'
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
      </motion.div>
    </div>
  )
}

export default AppWrap(Footer, 'Footer')