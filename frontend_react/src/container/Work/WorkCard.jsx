import React from 'react'
import './Work.scss';
// import Col from 'react-bootstrap/Col';


export const ProjectCard = ({ title, description, imgUrl}) =>{
    return(
        // <Col size={12} sm={6} md={4}>
        //     <div className='app__workCard'>
        //         <img src={imgUrl} alt='project-item'/>
        //         <div className='app__cardText'>
        //             <h4>{title}</h4>
        //             <span>{description}</span>
        //         </div>

        //     </div>
        // </Col>
        <li className='app__workCard'>
            <div className='projectBox'>
                <a href='#/home' className='projectLink'>
                    <img src={imgUrl} alt='project-item'/>
                    <div className='app__cardText'>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </li>
    )
}