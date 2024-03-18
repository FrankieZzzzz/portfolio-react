import React, { useState, useEffect } from 'react'

const NavigationDots = ({active}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };
        window.addEventListener('resize', handleResize )
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

  if (isMobile) {
    return(null)
  }else{
    return (
      <span className='app__navigation'>
        {[].map((item,index) => (
          <a 
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? {backgroundColor: '#7F5AF0'} : { }} />
        ))}
      </span>
    )
  }
}

export default NavigationDots
