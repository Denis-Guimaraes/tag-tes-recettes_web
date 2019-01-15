// NPM import
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Local import
import Home from 'src/components/Home';
import Signin from 'src/components/Signin';

// Styles
import './main.scss';

// Code
const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/connexion" component={Signin} />
    </Switch>
  </main>
);

// Export
export default Main;
