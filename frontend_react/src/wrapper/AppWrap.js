import React from 'react';
import {NavigationDots} from '../components'

const AppWrap = (Components, idName, classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}> 
        <div className='app__wrapper'>
            <Components />
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
 