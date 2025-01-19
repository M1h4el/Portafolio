import React from 'react';
import { IconContext } from 'react-icons';

const IconWrapperCards = ({ children, size = 35, color, imgSrc }) => {
  return (
    <>
    {imgSrc ? (
        <div className="Logo">
            <img className="logos" src={imgSrc} />
        </div>) : (
        <IconContext.Provider value={{ size, color }}>
        <div className='Logo'>
          {children}
        </div>
      </IconContext.Provider>)}
    
    </>
    
  );
};

export default IconWrapperCards;