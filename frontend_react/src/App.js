import React from 'react';

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
    </div>
  )
}

export default App;
