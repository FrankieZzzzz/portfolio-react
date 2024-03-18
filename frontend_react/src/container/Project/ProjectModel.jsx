import React, {useEffect, useState} from 'react';
import './Project.scss';
import './ProjectModel.scss';
import { urlFor, client } from '../../client'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark,faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import Video1 from "../../assets/animation.mp4";
import Video2 from "../../assets/animation2.mp4";
import {motion} from 'framer-motion';
import ReactPlayer from 'react-player';
import 'balloon-css';

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

    if (!open || !project && urlFor(project.imgUrl_description) ===''){
        document.body.style.cursor = 'default';
    } else{
        return(
            <div className='app__overlay' onClick={handleOverlayClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <motion.div 
                    animate={animateCard}
                    transition = {{duration: 0.5, delayChildren: 0.8}}
                    className='app__projectModel'
                >
                    <div className='app__projectModel-container'>
                        {/* close btn */}
                        <FontAwesomeIcon icon={faXmark} className='closeBtn' onClick={onClose}/>
                        {/* icon link */}
                        <div className='app__project-iconList'>
                            <div className='app__flex iconList'>
                                {project.netlify &&(
                                    <a href={project.netlify} target='_blank' rel='noreferrer'>
                                        <div className='app__flex app__project-icon'>
                                            <button aria-label="Website" data-balloon-pos="up"><FontAwesomeIcon icon={faCircleNodes} /></button>
                                        </div>
                                    </a>
                                )}
                                {project.projectLink && (
                                    <a href={project.projectLink} target='_blank' rel='noreferrer'>
                                        <div className='app__flex app__project-icon'>
                                            <button aria-label="Behance" data-balloon-pos="up"><FontAwesomeIcon icon={faSquareBehance} /></button>
                                        </div>
                                    </a>
                                )}
                                {project.codeLink && (
                                    <a href={project.codeLink} target='_blank' rel='noreferrer'>
                                        <div className='app__flex app__project-icon'>
                                            <button aria-label="Github" data-balloon-pos="up"><FontAwesomeIcon icon={faGithub} /></button>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>
                        {/* image content */}
                        <div className='app__projectModel-imgContent'>
                            {/* intro section */}
                            {project.imgUrl ? (
                                 <>  
                                    <div className='app_project-introBox'>
                                        <h3>{project.title}</h3>
                                        <div className='app_project-intro'>
                                            <h5>DESCRIPTION</h5>
                                            <p>{project.imgUrl_description.intro}</p>
                                        </div>
                                        <div className='app_project-intro'>
                                            <h5>SKILLS</h5>
                                            <p>{project.imgUrl_description.skills}</p>
                                            <h5>CATEGORIES</h5>
                                            <p>{project.imgUrl_description.categories}</p>
                                        </div>
                                    </div>
                                    <img src={urlFor(project.imgUrl_1)} alt={project.name} />
                                </>
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
                             {project.imgUrl_6 ? (
                                <img src={urlFor(project.imgUrl_6)} alt={project.name} />
                            ) : ('')}
                            {project.videoFile1 ? (
                                <>
                                    <ReactPlayer url={Video1} controls={true} className='video_position' autoPlay= {true} />
                                    <p className='ending_content'>THANK YOU</p>
                                </>
                            ) : ('')}
                            {project.videoFile2 ? (
                                <>
                                    <ReactPlayer url={Video2} controls={true} className='video_position' autoPlay= {true} />
                                    <p className='ending_content'>THANK YOU</p>
                                </>
                            ) : ('')}
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }
}

export default ProjectModel
