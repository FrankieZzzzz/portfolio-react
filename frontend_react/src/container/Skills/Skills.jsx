import React, {useState, useEffect} from 'react';
import './Skills.scss';
import '../Project/Project.scss'

import  {motion} from 'framer-motion';
import {AppWrap} from '../../wrapper';
import { urlFor, client } from '../../client'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [experiences, setExperience] = useState([])
  const [skills, setSkills] = useState([])  
  const [resume, setResume] = useState([])  
  useEffect(() => {
    const query = '*[_type == "experiences"] | order(year desc)';
    const skillQuery = '*[_type == "skills"] | order(company desc)';
    // Exp
    client.fetch(query)
    .then((data)=> {
        setExperience(data);
    })
    // Resume
    client.fetch(query)
    .then((data)=> {
        // console.log(data);
        setResume(data);
    })
    // skill
    client.fetch(skillQuery)
    .then((data)=> {
        setSkills(data);
    })
  }, [])
  return (
    <div className='app__skills ' id='Skills'>
        <motion.div
            whileInView={{x:[-100,0],opacity:[0,1]}}
            transition={{duration: 0.8}}
            className='app_project-info'
        >
            <div className='app_project-title'>
                <div className='header-title app_flex'>
                    <FontAwesomeIcon icon={faArrowRight} />
                    <span className='p-text'>Skills and work experience</span>
                </div>
            </div>
        </motion.div>
        <div className='app__skills-container'>
            {/* icon list */}
            <motion.div className='app__skills-list'>
                {skills.map((skills) => (
                <motion.div
                    whileInView={{opacity: [0,1]}}
                    transition={{duration: 2, delayChildren:0.5}}
                    className='app__skills-item app__flex'
                    key={skills.name}
                >
                    <div className='app__flex' style={{ backgroundColor: skills.bgColor}}>
                        <img src={urlFor(skills.icon)} alt={skills.name}/>
                    </div>
                </motion.div>
                ))}
            </motion.div>
            {/* experience list */}
            <motion.div className='app__skills-exp'>
                {experiences.map((experiences) => (
                    <motion.div
                        className='app__skills-exp-item'
                        key={experiences.year}
                    >
                        <div className='app__skills-exp-year'>
                            <p className='bold-text'>{experiences.year}</p>
                        </div>
                        <motion.div className='app__skills-exp-works'>
                            {experiences.works.map((work) => (
                                <>
                                    <motion.div
                                        whileInView={{opacity: [0,1]}}
                                        transition={{duration: 0.8}}
                                        className='app__skills-exp-work'
                                        data-tip
                                        data-for={work.name}
                                        key={work.name}
                                    >
                                        <div className='app__skills-exp-title'>
                                            <h4>{work.name}</h4>
                                            <p className='p-text'>{work.company}</p>
                                        </div>
                                        <div className='app__skills-exp-text'>
                                            <p className='p-text'>{work.desc}</p>
                                        </div>
                                    </motion.div>
                                    
                                </>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
                 {/* <div className='app__flex-end'>
                    <button type='button' className='app__skills-resume'><a href={resume}  target='_blank' rel='noreferrer'>View Full Résumé<span><FontAwesomeIcon icon={faArrowRight} /></span></a></button>
                </div>  */}
            </motion.div>
        </div> 
    </div>
  )
}

export default AppWrap(Skills, 'Skills')
 