import React from 'react';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import  {motion} from 'framer-motion';
import {AppWrap} from '../../wrapper';

import './Experience.scss'


function Experience() {
  return (
    <div className='app__statement'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration: 0.8}}
        className='app_project-info'
      >
        <div className='app_project-title'>
            <div className='header-title app_flex'>
                <FontAwesomeIcon icon={faArrowRight} />
                <span className='p-text'>Something I've Built</span>
            </div>
        </div>
      </motion.div>
      <p>"I believe in the power of simplicity and purposeful design, using creativity to communicate ideas with clarity and evoke meaningful emotions."</p>
    </div>
  )
}

export default AppWrap(Experience, 'Experience')