import React, { useState } from 'react';


export const CharacterContext = React.createContext();

export const CharacterProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fnColor, setfnColor] = useState('#000000');

  const handleDarkTheme = () => {
    if(bgColor === '#ffffff') 
      setBgColor('#000000');
    if(bgColor === '#000000') 
      setBgColor('#ffffff');
    if(fnColor === '#000000')
      setfnColor('#ffffff');
    if(fnColor === '#ffffff')
      setfnColor('#000000');
  };
  return (
    <CharacterContext.Provider value={{ bgColor, fnColor, handleDarkTheme }}>
      {children}
    </CharacterContext.Provider>
  );
};
