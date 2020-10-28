import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { CharacterProvider } from '../src/context/CharacterContext';
render(
  <CharacterProvider>
    <App />
  </CharacterProvider>,
  document.getElementById('root')
);
