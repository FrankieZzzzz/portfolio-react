import React, {useEffect} from 'react';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

import {AppWrap} from '../../wrapper';
import './Statement.scss';

const Statement = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const splitTypes = document.querySelector('.app__statment-content')
    const text = new SplitType(splitTypes, {type: 'chars'})
      
    gsap.from(text.chars, {
      scrollTrigger:{
        trigger: splitTypes,
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        markers: false
      },
      opacity: 0.2,
      stagger: 0.05
    }
  )}, [])

  return(
    <div className='app__statement'>
      <div className='app_project-info'>
        <div className='header-title app_flex'>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className='p-text'>I want to say</span>
        </div>
      </div>
      <p className='app__statment-content'>"I believe in the power of simplicity and purposeful design, using creativity to communicate ideas with clarity and evoke meaningful emotions."</p>
    </div>
  )
}
export default AppWrap(Statement, 'Statement')