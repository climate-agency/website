import * as React from 'react';
import gaPageView from '../gaPageView';

const debug = require('debug')('App:DCF');

@gaPageView('/dash-climate-fund')
class DashClimateFund extends React.Component {
  render() {
    debug('render dcf');
    return <div>Dash Climate Fund</div>;
  }
}

export default DashClimateFund;
