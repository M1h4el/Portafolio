import React, { useEffect, useState } from 'react';
import '../Pages/Styles/MainPage.scss';
import SkillComponent from "../Components/SkillComponent";

const ScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Mostrar el componente después de 0.4 segundos
    }, 400); // 400ms = 0.4s

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  return (
    <div className={`reveal-container ${isVisible ? 'visible' : ''}`}>
      <SkillComponent />
    </div>
  );
};

export default ScrollReveal;
