import React, {useEffect, useState} from 'react';
import  {motion} from 'framer-motion';

import {Footer, Header, Experience, Project, Skills} from './container'
import { Navbar } from './components';
import './ContainerPack.scss';

const ContainerPack = () => {
// get mouse position
    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
    })
// add position to dot
    const [cursorVariant, setCursorVariant] = useState("default")
        useEffect(() => {
            const mouseMove = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }
            window.addEventListener("mousemove", mouseMove);
                return () => {
                window.removeEventListener("mousemove", mouseMove)
            }
    }, [])

  // set dot position with cursor and add style
    const variants = {
        default: {
            x: mousePosition.x +36,
            y: mousePosition.y +36,
            backgroundColor: '#ffffff',
            // backgroundColor: 'transparent',
            boxShadow: "80px 80px 150px 150px #0d192e65",
            borderRadius: '50%',
            mixBlendMode: "screen",

        },
        text:{
            height: 48,
            width: 48,
            x: mousePosition.x -24,
            y: mousePosition.y -24,
            backgroundColor: 'none',
            mixBlendMode: "difference",
            borderRadius: '50%'
        }
    }



  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default")
  return (
    <div>
        <motion.div
            className='cursor'
            variants={variants}
            animate={cursorVariant}
        />
        <Navbar />
        <Header />
        <Project />
        <Skills />
        <Experience />
        <Footer />
        <motion.div className='footer_text' onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p>Loosely designed in Figma and coded in Visual Studio Code. Open sourced on <a href='https://github.com/FrankieZzzzz' target='_black' rel='referrence'>GitHub</a> and deployed with Netlify</p>
        </motion.div>
      </div>
  )
}

export default ContainerPack
