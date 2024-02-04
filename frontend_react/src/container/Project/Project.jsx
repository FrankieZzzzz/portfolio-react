import React, { useState, useEffect } from 'react';
import './Project.scss';
import ProjectModel from './ProjectModel';
import  {motion} from 'framer-motion';

import {AppWrap} from '../../wrapper';
import { urlFor, client } from '../../client'

import {faGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
    const [openModal, setOpenModal] = useState(false)
    const [activeFilter, setactiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1});
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [selectedWork, setSelectedWork] = useState('');


    const [visibleItems, setVisibleItems] = useState(6)
    const loadMoreItems = () => {
        setVisibleItems( prevValue => prevValue + 4)
    };
    const loadMLessItems = () => {
        setVisibleItems( prevValue => prevValue - 4)
    };
    useEffect(() => {
        const query = '*[_type == "works"] | order(label asc )';
        client.fetch(query)
        .then((data)=> {
            setWorks(data);
            setFilterWork(data);
        })
    }, []);
    //   click for different section
    const handleWorkFilter = (item) => {

        setactiveFilter(item);
        setAnimateCard([{y:100, opacity:0}])
        setTimeout(() => {
            setAnimateCard([{y:0, opacity:1}])
            if(item === 'All'){
                setFilterWork(works);
            }else{
                setFilterWork(works.filter((work) => work.tags.includes(item)))
            }
        }, 500)
    };
//   window size
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 1200);
            };

            window.addEventListener('resize', handleResize )
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

    const handleProjectItemClick = (work) => {
        if(work.imgUrl_1 || work.imgUrl_2 || work.imgUrl_3 || work.imgUrl_4 || work.imgUrl_5){
            setOpenModal(true);
            setSelectedWork(work)
        }else{
            return(null)
        }
    };

        
    if (isMobile){
        return (
            <>
                <div className='app__projects' id='Project'>
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
                    <div className="app__projects-filter">
                        {['All', 'Web Design', 'UI/UX', 'Branding', 'Graphic Design'].map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleWorkFilter(item)}
                                className={`app__projects-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <motion.div
                        animate={animateCard}
                        transition = {{duration: 0.5, delayChildren: 0.5}}
                        className='app__projects-portfolioMobile'
                    >
                        {filterWork.slice(0, visibleItems).map((work, index) => (
                            <div className='app__projects-item app__flex' key={index}>
                                <div className='app__projects-img app__flex'>
                                    <img src={urlFor(work.imgUrl)} alt={work.name} />
                                    <div className='app__projects-contentMobile'>
                                        <div className='app__project-text'>
                                            <h4>{work.title}</h4>
                                        </div> 
                                        <div className='app__project-iconBox'>
                                            <div className='app__flex'>
                                                {work.netlify &&(
                                                    <a href={work.netlify} target='_blank' rel='noreferrer'>
                                                        <div className='app__flex app__project-icon'>
                                                            <FontAwesomeIcon icon={faCircleNodes} />
                                                        </div>
                                                    </a>
                                                )}
                                                
                                                {work.projectLink && (
                                                    <a href={work.projectLink} target='_blank' rel='noreferrer'>
                                                        <div className='app__flex app__project-icon'>
                                                            <FontAwesomeIcon icon={faSquareBehance} />
                                                        </div>
                                                    </a>
                                                )}
                                                
                                                {work.codeLink && (
                                                    <a href={work.codeLink} target='_blank' rel='noreferrer'>
                                                        <div className='app__flex app__project-icon'>
                                                            <FontAwesomeIcon icon={faGithub} />
                                                        </div>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    {activeFilter === 'All' ? (
                        <motion.div
                            className='app__flex'
                            whileInView={{x:[-50,0],opacity:[0,1]}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            <button type='button' onClick={visibleItems<= 10 ? loadMoreItems : loadMLessItems} className='app__project-loadMoreBtn'>{visibleItems <= 10 ? 'Load more' : 'Load less'}<span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                        </motion.div>
                    ) : null}
                </div>
                <ProjectModel open={openModal} project={selectedWork} onClose={(() => setOpenModal(false))}/>
            </>
        )
    }else{
        // when window size bigger than 1200px
        return (
            <>
                <div className='app__projects'>
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
                    {/* filter */}
                    <div className="app__projects-filter">
                            {['All', 'Web Design', 'UI/UX', 'Branding', 'Graphic Design'].map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleWorkFilter(item)}
                                className={`app__projects-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    {/* project box */}
                    <motion.div
                        animate={animateCard}
                        transition = {{duration: 0.5, delayChildren: 0.5}}
                        className='app__projects-portfolio'
                    >
                        {filterWork.slice(0, visibleItems).map((work, index) => (
                            <div className='app__projects-item app__flex' key={index}>
                                <div className='app__projects-img app__flex' onClick={() => handleProjectItemClick(work)} >
                                    <img 
                                        src={urlFor(work.imgUrl)} 
                                        alt={work.name} 
                                    />
                                    <motion.div
                                        whileHover={{opacity: [0,1]}}
                                        transition={{ duration: 0.65, ease: 'easeInOut', staggerChildren: 0.5 }}
                                        className='app__projects-hover '
                                    >       
                                        <div className='app__project-text'>
                                            <h4>{work.title}</h4>
                                            <span>{work.description}</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    {activeFilter === 'All'? (
                        <motion.div
                            className='app__flex'
                            whileInView={{x:[-30,0],opacity:[0,1]}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            <button type='button' onClick={visibleItems<= 10 ? loadMoreItems : loadMLessItems} className='app__project-loadMoreBtn'>{visibleItems <= 10 ? 'Load more' : 'Load less'}<span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                        </motion.div>
                    ) : null}
                </div>
                
                <ProjectModel open={openModal} project={selectedWork} onClose={(() => setOpenModal(false))}/>
            </>
        )
    }
}
export default AppWrap(Project, 'Project')

