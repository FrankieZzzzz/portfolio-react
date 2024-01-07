import React from 'react';
import  {motion} from 'framer-motion';

import {Footer, Header, Experience, Project, Skills} from './container'
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      {/* <Work /> */}
      {/* <About /> */}
      <Project />
      <Skills />
      <Experience />
      <Footer />
      <motion.div className='footer_text'>
        <p>Loosely designed in Figma and coded in Visual Studio Code. Open sourced on <a href='https://github.com/FrankieZzzzz' target='_black' rel='referrence'>GitHub</a> and deployed with Netlify</p>
      </motion.div>
    </div>
  )
}

export default App;
