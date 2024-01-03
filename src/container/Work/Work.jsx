import React from 'react'
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





const Work = () => {
  const projects =[
    {
      title: 'Toronto Weather App',
      description: 'An app that updates weather data in real time',
      imgUrl: images.WeatherApp,
      gitHubLink: 'https://github.com/FrankieZzzzz/toronto-weather-app-react',
      behanceLink:'https://www.behance.net/gallery/187129193/Weather-App-Design-Web-Design',
      netlify: 'https://toronto-weather-app-react.netlify.app/'

    },
    {
      title: 'Travel Landing page | web design',
      description: 'Banff National Park Landing page',
      imgUrl: images.TravelWeb,
      gitHubLink: 'https://github.com/FrankieZzzzz/parkcanada.com_Travel-website-Landing-Page',
      behanceLink:'https://www.behance.net/gallery/186936805/Travel-Landing-page-web-design',
      netlify: 'https://parkcanada.netlify.app/'
    },
    {
      title: 'Actif',
      description: 'Athletic Apparel Brand Design',
      imgUrl: images.BrandDesign,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/gallery/171346859/Logo-Visual-identity-Logo-design-Modern-logo',
      netlify: ''
    },
    {
      title: 'World Clock App',
      description: 'Real time update time for cities',
      imgUrl: images.WorldClock,
      gitHubLink: 'https://github.com/FrankieZzzzz/World-Clock-App',
      behanceLink:'',
      netlify: 'https://toronto-world-clock-site.netlify.app/'
    },
    {
      title: 'NaturCycle-Skincare Case Study',
      description: 'UI UX design',
      imgUrl: images.CaseStudy,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/gallery/186803485/NaturCycle-Skincare-App-UIUX-Case-Study',
      netlify: ''

    },
    {
      title: 'PSA Campaign Posters',
      description: 'use the same photo to design two posters with different meanings',
      imgUrl: images.MaskPSA,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/gallery/169441407/PSA-Campaign-Posters',
      netlify: ''

    },
    {
      title: 'Magezine Design: My little airport',
      description: 'HongKong indie music band',
      imgUrl: images.MagazineDesign,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/gallery/169965059/Magezine-Design-My-little-airport',
      netlify: ''
    },
    {
      title: 'Movie Poster Design',
      description: 'Only three colors to design three movie posters.',
      imgUrl: images.PosterDesign,
      gitHubLink: '',
      behanceLink:'https://www.behance.net/gallery/169612451/POSTER-DESIGN',
      netlify: ''
    },
  ]
  return (
    <section className='app__workBox'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration: 0.8}}
        className='app_header-info'
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
export default Work
