import React from 'react';

import {About, Footer, Header, Experience, Work} from './container'
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Work />
      <About />
      <Experience />
      <Footer />
    </div>
  )
}

export default App;
