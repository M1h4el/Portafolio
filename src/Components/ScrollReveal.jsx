import React, { useEffect, useState } from 'react';
import '../Pages/Styles/MainPage.scss';

const ScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100 && !isVisible) { // Ajusta el valor para cuando quieras que se active
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div className={`reveal-container ${isVisible ? 'visible' : ''}`}>
      <h1>Hola, me estoy deslizando hacia arriba 🚀</h1>
    </div>
  );
};

export default ScrollReveal;
