import React, { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';
import cssStyles from './CharacterList.css';

const CharacterList = () => {
  const { bgColor, fnColor } = useContext(CharacterContext);

  const styles = {
    backgroundColor: bgColor,
    color: fnColor
  };


  const characters = useCharacters();
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <CharacterItem {...character}/>
    </li>
  ));

  return (
    <div style={styles}>
      <ul className={cssStyles.CharacterList}>
        {characterElements}     
      </ul>
    </div>
  );
};




export default CharacterList;
