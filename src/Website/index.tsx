import * as React from 'react';
import * as Debug from 'debug';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import DashClimateFund from './DashClimateFund';
import './index.css';

const debug = Debug('App:Bla');

debug('Hello world');

const Website = () => (
  <div>
    <nav>
      <NavLink to="/dash-climate-fund">Dash Climate Fund</NavLink>
    </nav>
    <main>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/dash-climate-fund" component={DashClimateFund} />
        <Route component={Home} />
      </Switch>
    </main>
  </div>
);

export default Website;
