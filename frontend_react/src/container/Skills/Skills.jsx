import React, {useState, useEffect} from 'react'
import './Skills.scss';
import '../Project/Project.scss'

import { Tooltip as ReactTooltip } from 'react-tooltip'
import  {motion} from 'framer-motion';
import {AppWrap} from '../../wrapper';
import { urlFor, client } from '../../client'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [experiences, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillQuery = '*[_type == "skills"]';
    
    client.fetch(query)
    .then((data)=> {
        console.log(data);
        setExperience(data);
    })
    client.fetch(skillQuery)
    .then((data)=> {
        setSkills(data);
    })
  }, [])
  return (
    <div className='app__skills' id='Skills'>
        <motion.div
            whileInView={{x:[-100,0],opacity:[0,1]}}
            transition={{duration: 0.8}}
            className='app__header-info'
        >
            <div className='app__header-title'>
                <div className='header-title app_flex'>
                    <FontAwesomeIcon icon={faArrowRight} />
                    <span className='p-text'>My Skill Set</span>
                </div>
            </div>
        </motion.div>
        <div className='app__Skills-container'>
            <motion.div className='app__Skills-list'>
                {skills.map((skills) => (
                <motion.div
                    whileInView={{opacity: [0,1]}}
                    transition={{duration: 0.5}}
                    className='app__skills-item app__flex'
                    key={skills.name}
                >
                    <div className='app__flex' style={{ backgroundColor: skills.bgColor}}>
                        <img src={urlFor(skills.icon)} alt={skills.name}/>
                    </div>
                    <p className='p-text'>{skills.name}</p>
                </motion.div>
                ))}
            </motion.div>
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
                                        transition={{duration: 0.5}}
                                        className='app__skills-exp-work'
                                        data-tip
                                        data-for={work.name}
                                        key={work.name}
                                    >
                                        <h4 className='bold-text'>{work.name}</h4>
                                        <p className='p-text'>{work.company}</p>
                                    </motion.div>
                                    <ReactTooltip 
                                        id={work.name}
                                        effect="solid"
                                        arrowColor='#fff'
                                        className='skills-tooltip'
                                    >
                                        {work.desc}
                                    </ReactTooltip>
                                </>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>          
    </div>
  )
}

export default AppWrap(Skills, 'Skills')
