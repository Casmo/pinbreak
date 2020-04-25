import React from 'react';
import { render } from 'react-dom';
import Page from './js/Page'
import './styles/index.scss'

const App = () => (
  <div>
    <Page />
  </div>
);

render(<App />, document.getElementById('root'));