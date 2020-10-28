import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';


const Header = () => {
  
  const { bgColor, fnColor, handleDarkTheme } = useContext(CharacterContext);
  return (
    <>
      <button 
        value={bgColor, fnColor} 
        onClick={handleDarkTheme}>
          Toggle Light/Dark
      </button>
    </>
  );

};
export default Header;
