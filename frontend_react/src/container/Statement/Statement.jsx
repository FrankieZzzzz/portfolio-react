import React, {useEffect, useState} from 'react';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import {AppWrap} from '../../wrapper';
import './Statement.scss';

const Statement = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        window.addEventListener('resize', handleResize )
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const splitTypes = document.querySelector('.app__statment-content')

    const bg = splitTypes.dataset.bgColor;
    const fg = splitTypes.dataset.fgColor;
    const text = new SplitType(splitTypes, {type: 'chars'})
    
    gsap.fromTo(text.chars, 
      {
        color: bg,
      },
      {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger:{
          trigger: splitTypes,
          start: isMobile ? 'top 50%' : 'top 80%',
          end: isMobile ? 'bottom 20%' : 'top 20%',
          scrub: true,
          markers: false,
          colorProps: {color: 'hsl(#7F5AF0 50% 20%)'},
          // toggleActions:'play play reverse reverse'
        }
      }
  )}, )

  return(
    <div className='app__statement' id='Statement'>
      <div className='app_project-info'>
        <div className='header-title app_flex'>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className='p-text'>I want to say</span>
        </div>
      </div>
        <p className='app__statment-content' data-bg-color="#BBDEFB" data-fg-color='#7F5AF0'>
          "I believe in the power of simplicity and purposeful design, using creativity to communicate ideas with clarity and evoke meaningful emotions."
        </p>
      
    </div>
  )
}
export default Statement