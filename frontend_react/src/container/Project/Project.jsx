import React, { useState, useEffect } from 'react'
import  {motion} from 'framer-motion';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {AppWrap} from '../../wrapper';
import './Project.scss';
import { urlFor, client } from '../../client'
import {faGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";

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
    <div className='app__works'>
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
      <div className="app__work-filter">
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
                    <motion.div
                      whileHover={{opacity: [0,1]}}
                      transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                      className='app__work-hover app__flex'
                    >
                    <a href={work.projectLink} target='_blank' rel='noreferrer'>
                        <motion.div
                        whileInView={{scale: [0,1]}}
                        whileHover={{opacity: [1,0.8]}}
                        transition={{ duration: 0.25 }}
                        className='app__flex'
                        >
                            <FontAwesomeIcon icon={faCircleNodes} />
                        </motion.div>
                    </a>
                    <a href={work.projectLink} target='_blank' rel='noreferrer'>
                        <motion.div
                        whileInView={{scale: [0,1]}}
                        whileHover={{opacity: [1,0.8]}}
                        transition={{ duration: 0.25 }}
                        className='app__flex'
                        >
                            <FontAwesomeIcon icon={faSquareBehance} />
                        </motion.div>
                    </a>
                    <a href={work.projectLink} target='_blank' rel='noreferrer'>
                        <motion.div
                        whileInView={{scale: [0,1]}}
                        whileHover={{opacity: [1,0.8]}}
                        transition={{ duration: 0.25 }}
                        className='app__flex'
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </motion.div>
                    </a>
                    </motion.div>
                </div>
                <div className='app__work-content app__flex'>
                    <h4 className='bold-text'>{work.title}</h4>
                    <p className='p-text' style={{marginTop: 10}}>{work.description}</p>

                    <div className='app__work-tag app__flex'>
                        <p className='p-text'>{work.tags[2]}</p>
                    </div>
                </div>
            </div>

        ))}
      </motion.div>
    </div>
  )
}
export default AppWrap(Project, 'Project')

