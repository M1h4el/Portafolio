import React from 'react';
import { IconContext } from 'react-icons';

const IconWrapper = ({ children, size = 20, style = { marginTop: 4 } }) => {
  return (
    <IconContext.Provider value={{ size }}>
      <div style={style}>
        {children}
      </div>
    </IconContext.Provider>
  );
};

export default IconWrapper;