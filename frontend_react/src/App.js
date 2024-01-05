import React from 'react';

import {About, Footer, Header, Experience, Work, Project} from './container'
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      {/* <Work /> */}
      <Project />
      <About />
      <Experience />
      <Footer />
    </div>
  )
}

export default App;
