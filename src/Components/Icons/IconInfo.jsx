import { IconContext } from 'react-icons';

const IconInfo = ({ children, size = 25, label }) => {
  return (
    <IconContext.Provider value={{ size }}>
      <div className="list">
        {children}
        <p>{label}</p>
      </div>
    </IconContext.Provider>
  );
};

export default IconInfo;