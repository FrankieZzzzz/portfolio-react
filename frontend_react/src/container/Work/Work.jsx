import React from 'react';
import './Work.scss';
import  {motion} from 'framer-motion';
// import {images} from '../../constants';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {Nav, Tab, Row, Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProjectCard } from './WorkCard';
import TrackVisibility from 'react-on-screen';
import {images} from '../../constants';

import {AppWrap} from '../../wrapper';





const Work = () => {

  const projects =[
    {
      title: 'Toronto Weather App',
      description: 'An app that updates weather data in real time',
      imgUrl: images.WeatherApp,
      gitHubLink: 'https://github.com/FrankieZzzzz',
      behanceLink:'https://www.behance.net/zhongweini0703',
      netlify: 'https://app.netlify.com/teams/frankiezzzzz/overview'

    },
    {
      title: 'project2',
      description: 'project2',
      imgUrl: images.TravelWeb,
      gitHubLink: 'https://github.com/FrankieZzzzz',
      behanceLink:'https://www.behance.net/zhongweini0703',
      netlify: 'https://app.netlify.com/teams/frankiezzzzz/overview'
    },
    {
      title: 'project3',
      description: 'project3',
      imgUrl: images.BrandDesign,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/zhongweini0703',
      netlify: ''
    },
    {
      title: 'project4',
      description: 'project4',
      imgUrl: images.WorldClock,
      gitHubLink: 'https://github.com/FrankieZzzzz',
      behanceLink:'https://www.behance.net/zhongweini0703',
      netlify: 'https://app.netlify.com/teams/frankiezzzzz/overview'
    },
    {
      title: 'project5',
      description: 'project5',
      imgUrl: images.CaseStudy,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/zhongweini0703',
      netlify: ''

    },
    {
      title: 'project6',
      description: 'project6',
      imgUrl: images.MaskPSA,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/zhongweini0703',
      netlify: ''

    },
    {
      title: 'project7',
      description: 'project7',
      imgUrl: images.MagazineDesign,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/zhongweini0703',
      netlify: ''
    },
    {
      title: 'project8',
      description: 'project8',
      imgUrl: images.PosterDesign,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/zhongweini0703',
      netlify: ''
    },
  ]
  return (
    <section id={Work} className='app__workBox'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration: 0.8}}
        className='app__header-info'
      >
        <div className='app__header-title'>
          <div className='header-title app_flex'>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className='p-text'>Something I've Built</span>
          </div>
        </div>
      </motion.div>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => 
              <div className={isVisible ? 'animate__animated animate__fadeIn' : ""}>
                <Tab.Container id='app__work' defaultActiveKey='All'>
                  <Nav className="nav-pills" variant='pills' defaultActiveKey={'/All'} >
                    <Nav.Item className='nav-item'>
                      <Nav.Link eventKey='All'>
                        All
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='Web'>
                        Web App
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='Ux'>
                        UI UX
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='Graphic'>
                        Graphic Design
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideUp' : ""}>
                    <Tab.Pane eventKey='All'>
                      <Row>
                        <ul className='app__projectList'>
                          {projects.map((project, index) => {
                            return(
                              <ProjectCard key={index} {...project}/>
                            )
                          })}
                        </ul>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='Web'>Web</Tab.Pane>
                    <Tab.Pane eventKey='Ux'>UI UX</Tab.Pane>
                    <Tab.Pane eventKey='Graphic'>Graphic Design</Tab.Pane>
                    <Tab.Pane>third</Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AppWrap(Work, 'Work')
