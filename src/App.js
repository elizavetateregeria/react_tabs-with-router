import React from 'react';
import './App.css';
import {
  HashRouter, Route, Switch, NavLink,
} from 'react-router-dom';

import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';

const App = () => (
  <HashRouter>
    <div className="App">
      <nav>
        <ul className="menu">
          <li className="menu__item">
            <NavLink
              className="menu__item-link"
              exact
              to="/"
            >
            Home
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className="menu__item-link"
              to="/tabs"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tabs/:tabId?" component={TabsPage} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
