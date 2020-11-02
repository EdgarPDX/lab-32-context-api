import React from 'react';
import { render } from '@testing-library/react';
import CharacterItem from './CharacterItem';


describe('Character component', () => {
  it('renders Character', () => {
    const { asFragment } = render(<CharacterItem
      name="test name"
      image="test image"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
