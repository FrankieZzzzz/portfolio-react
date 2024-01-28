import React, {useEffect, useState} from 'react';
import './Project.scss';
import './ProjectModel.scss';
import { urlFor, client } from '../../client'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark,faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons';

import  {motion} from 'framer-motion';

const ProjectModel = ({open, onClose, project}) => {
    const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1});
    useEffect(() => {
        if(open) {
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
        return() => {
            document.body.style.overflow = 'auto';
        }
    },[open])
    const handleOverlayClick = () =>{
        onClose()
    };
    const handleMouseEnter = () =>{
        document.body.style.cursor = 'zoom-out';
    };
    const handleMouseLeave = () =>{
        document.body.style.cursor = 'default';
    };

    if (!open || !project){
        document.body.style.cursor = 'default';
    } else{
        return(
            <div className='app__overlay' onClick={handleOverlayClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <motion.div 
                    className='app__projectModel'
                    animate={animateCard}
                    transition = {{duration: 0.5, delayChildren: 0.5}}
                >
                    <div className='app__projectModel-container'>
                        {/* close btn */}
                        <FontAwesomeIcon icon={faXmark} className='closeBtn' onClick={onClose}/>
                        {/* icon link */}
                        <motion.div className='app__project-iconList'>
                            <div className='app__flex iconList'>
                                {project.netlify &&(
                                    <a href={project.netlify} target='_blank' rel='noreferrer'>
                                        <div className='app__flex app__project-icon'>
                                            <FontAwesomeIcon icon={faCircleNodes} />
                                        </div>
                                    </a>
                                )}
                                {project.projectLink && (
                                    <a href={project.projectLink} target='_blank' rel='noreferrer'>
                                        <div className='app__flex app__project-icon'>
                                            <FontAwesomeIcon icon={faSquareBehance} />
                                        </div>
                                    </a>
                                )}
                                
                                {project.codeLink && (
                                    <a href={project.codeLink} target='_blank' rel='noreferrer'>
                                        <div className='app__flex app__project-icon'>
                                            <FontAwesomeIcon icon={faGithub} />
                                        </div>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                        {/* image content */}
                        <motion.div className='app__projectModel-imgContent'>
                            {project.imgUrl_description ? (
                                <img src={urlFor(project.imgUrl_description)} alt={project.name} />
                            ) : ('')}
                            {project.imgUrl_1 ? (
                                <img src={urlFor(project.imgUrl_1)} alt={project.name} />
                            ) : ('')}
                            {project.imgUrl_2 ? (
                                <img src={urlFor(project.imgUrl_2)} alt={project.name} />
                            ) : ('')}
                            {project.imgUrl_3 ? (
                                <img src={urlFor(project.imgUrl_3)} alt={project.name} />
                            ) : ('')}
                            {project.imgUrl_4 ? (
                                <img src={urlFor(project.imgUrl_4)} alt={project.name} />
                            ) : ('')}
                            {project.imgUrl_5 ? (
                                <img src={urlFor(project.imgUrl_5)} alt={project.name} />
                            ) : ('')}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        )
    }
}

export default ProjectModel
