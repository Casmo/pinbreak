import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { render } from 'react-dom';
import Page from './js/Page';
import Levels from './js/Levels';
import './styles/index.scss';

const App = () => (
  <Router>
    <Switch>
      <Route path="/levels">
        <Levels />
      </Route>
      <Route path="/">
        <Page />
      </Route>
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));