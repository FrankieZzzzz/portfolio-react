import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <span className='app__navigation'>
      {['Header','Work','Project','Experience','Contact'].map((item,index) => (
        <a 
        href={`#${item}`}
        key={item + index}
        className='app__navigation-dot'
        style={active === item ? {backgroundColor: '#7F5AF0'} : { }} />
      ))}
    </span>
  )
}

export default NavigationDots
