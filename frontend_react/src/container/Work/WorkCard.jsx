import React, {useState, useEffect} from 'react'
import './Work.scss';
// import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
  
export const ProjectCard = ({ title, description, imgUrl, netlify, behanceLink, gitHubLink }) =>{
    
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
    
    
    if(isMobile) {
        return(
           <li className='app__workCard-Mobile'>
                <div className='projectBox'>
                    <img src={imgUrl} alt='project-item'/>
                </div>
                <div className='app__cardText-mobile'>
                        <div>
                            <h4>{title}</h4>
                            <span>{description}</span>
                        </div>
                        <div className='app__cardIcon'>
                            
                            {behanceLink && (
                                <a href={behanceLink} className='projectLink' target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faSquareBehance} />
                                </a>
                            )}
                            {netlify && (
                                <a href={netlify} className='projectLink' target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faCircleNodes} />
                                </a>
                            )}
                            {gitHubLink && (
                                <a href={gitHubLink} className='projectLink' target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            )}
                        </div>
                    </div>
            </li>
        )
    }else {
        return(
             <li className='app__workCard'>
                <div className='projectBox'>
                    <a href='#/' className='projectLink'>
                        <img src={imgUrl} alt='project-item'/>
                        <div className='app__cardText'>
                            <h4>{title}</h4>
                            <span>{description}</span>
                            <div className='app__cardIcon'>
                                {behanceLink && (
                                    <a href={behanceLink} className='projectLink' target='_blank' rel="noreferrer">
                                        <FontAwesomeIcon icon={faSquareBehance} />
                                    </a>
                                )}
                                {netlify && (
                                    <a href={netlify} className='projectLink' target='_blank' rel="noreferrer">
                                        <FontAwesomeIcon icon={faCircleNodes} />
                                    </a>
                                )}
                                {gitHubLink && (
                                    <a href={gitHubLink} className='projectLink' target='_blank' rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </a>
                </div>
            </li>
        )
    }
}

