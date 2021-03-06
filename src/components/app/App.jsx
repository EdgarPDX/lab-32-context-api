import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import Header from '../../header/Header';


export default function App() {


  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={CharacterList} />
      </Switch>
    </Router>
  );
}
