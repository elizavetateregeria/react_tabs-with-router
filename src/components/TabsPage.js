import React from 'react';
import PropTypes from 'prop-types';

import initialTabs from '../InitialTabs';
import Tabs from './Tabs';

const TabsPage = ({ match }) => (
  <Tabs
    tabs={initialTabs}
    tabId={match.params.tabId}
  />
);

TabsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }).isRequired,
};

export default TabsPage;
