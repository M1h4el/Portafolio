import React, { useEffect, useState } from 'react';
import '../Pages/Styles/MainPage.scss';
import SkillComponent from "../Components/SkillComponent";

const ScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`reveal-container ${isVisible ? 'visible' : ''}`}>
      <SkillComponent />
    </div>
  );
};

export default ScrollReveal;
