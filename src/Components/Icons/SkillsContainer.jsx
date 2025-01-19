import React from 'react';
import { IconContext } from 'react-icons';

const SkillIcon = ({ icon: Icon, label, color, imgSrc }) => {
  return (
    <div className="skillsContainer">
      {imgSrc ? (
        <div className="Logo">
          <img className="logos" src={imgSrc} alt={`${label} Logo`} />
        </div>
      ) : (
        <IconContext.Provider value={{ size: 50, color }}>
          <div className="Logo">
            <Icon />
          </div>
        </IconContext.Provider>
      )}
      <p>{label}</p>
    </div>
  );
};

export default SkillIcon;