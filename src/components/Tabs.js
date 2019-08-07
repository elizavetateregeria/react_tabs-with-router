import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, tabId }) => (
  <>
    <h2>Tabs</h2>
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id} className="tab">
          <NavLink
            to={`/tabs/${tab.id}`}
            className="tab__link"
          >
            {tab.title}
          </NavLink>
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

export default Tabs;
