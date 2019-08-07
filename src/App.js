import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Route, Link, Switch, NavLink,
} from 'react-router-dom';

const initialTabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

const HomePage = () => <h1>Home page</h1>;

const TabsPage = ({ match }) => (
  <Tabs
    tabs={initialTabs}
    tabId={match.params.tabId}
  />
);

const Tabs = ({ tabs, tabId }) => (
  <>
    <h2>Tabs</h2>
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id} className="tab">
          <Link to={`/tabs/${tab.id}`} className="tab__link">{tab.title}</Link>
        </li>
      ))}
    </ul>
    <p>
      {tabId ? tabs.find(tab => tab.id === tabId).content : ''}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  tabId: PropTypes.string,
};

Tabs.defaultProps = {
  tabId: null,
};

TabsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }).isRequired,
};

export default App;
