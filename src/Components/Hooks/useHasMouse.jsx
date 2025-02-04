import { useState, useEffect } from 'react';

const useHasMouse = () => {
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia('(pointer: fine)');
    setHasMouse(matchMedia.matches);

    const handleChange = (event) => {
      setHasMouse(event.matches);
    };

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, []);

  return hasMouse;
};

export default useHasMouse;