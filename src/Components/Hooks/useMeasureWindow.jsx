import { useEffect } from 'react';

const useMeasureWindow = () => {
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Establecer las variables CSS personalizadas en :root
    document.documentElement.style.setProperty('--window-width', `${width}px`);
    document.documentElement.style.setProperty('--window-height', `${height}px`);
  }, []);
};

export default useMeasureWindow;
