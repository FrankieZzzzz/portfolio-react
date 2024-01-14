import React from 'react';
import ContainerPack from './ContainerPack';
import PreLoader from './components/preLoader/PreLoader'

import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <PreLoader />
      <ContainerPack />
    </div>
  )
}

export default App;
