import * as React from 'react';
import withPageView from '../withPageView';

const debug = require('debug')('App:DCF');

const DashClimateFund = () => {
  debug('Dash Climate Fund Render');
  return <div>Dash Climate Fund</div>;
};

export default withPageView(DashClimateFund, '/dash-climate-fund');
