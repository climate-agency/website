import * as React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import DashClimateFund from './DashClimateFund';
import { Link } from 'react-router-dom';
import './index.css';

const Website = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dash-climate-fund">Dash Climate Fund</Link>
        </li>
      </ul>
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
