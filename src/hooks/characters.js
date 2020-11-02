import { useState, useEffect } from 'react';
import { getCharacters } from '../services/hey-arnold-api';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return characters;
};


