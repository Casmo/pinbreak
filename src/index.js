import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { render } from 'react-dom';
import MainMenu from './js/MainMenu';
import Level from './js/Level';
import './styles/index.scss';

const App = () => (
    <Router>
        <Switch>
            <Route path="/level/:level" component={Level} />
            <Route path="/">
                <MainMenu />
            </Route>
        </Switch>
    </Router>
);

render(<App />, document.getElementById('root'));
