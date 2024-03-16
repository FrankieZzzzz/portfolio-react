import React from 'react';
import './Work.scss';
import  {motion} from 'framer-motion';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {Nav, Tab, Row, Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProjectCard } from './WorkCard';
import TrackVisibility from 'react-on-screen';
import {images} from '../../constants';

import {AppWrap} from '../../wrapper';





const Work = () => {

  return (
    <section id={Work} className='app__workBox'>
      <motion.div className='app__header-info' 
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration: 0.8}}
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
