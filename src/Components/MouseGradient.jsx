import React, { useEffect } from 'react';
import '../Pages/Styles/MainPage.scss';

const MouseGradient = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 100;
      const mouseY = (event.clientY / window.innerHeight) * 100;

      document.body.style.setProperty('--mouse-x', `${mouseX}%`);
      document.body.style.setProperty('--mouse-y', `${mouseY}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default MouseGradient;