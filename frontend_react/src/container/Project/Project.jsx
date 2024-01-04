import React, { useState, useEffect } from 'react'
import  {motion} from 'framer-motion';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {AppWrap} from '../../wrapper';
import { urlFor, client } from '../../client';
import './Project.scss';


const Project = () => {

  const [activeFilter, setactiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
    .then((data)=> {
        setWorks(data);
        setFilterWork(data);
    })
  }, [])

  const handleWorkFilter = (item) => {

  }
  return (
    <>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration: 0.8}}
        className='app_project-info'
      >
        <div className='project-title'>
          <div className='header-title app_flex'>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className='p-text'>Something I've Built</span>
          </div>
        </div>
      </motion.div>
      <div>
        {['UI/UX', 'Web APP', 'Graphic Design', 'All'].map((item, index) => (
            <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
                {item}
            </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition = {{duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
                <div className='app__work-img app__flex'>
                    <img src={urlFor(work.imgUrl)} alt={work.name} />
                </div>

            </div>
        ))}
      </motion.div>
    </>
  )
}

export default Project
