import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';


const Header = () => {
  
  const { handleDarkTheme } = useContext(CharacterContext);
  return (
    <>
      <button 
        onClick={handleDarkTheme}>
          Toggle Light/Dark
      </button>
    </>
  );

};
export default Header;
