import React from 'react';
import Player from './player';
import Team from './Team'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/' exact component={Team} />
        <Route path = '/:playerid' exact component={Player} />
      </Switch>
    </Router>
  )}

export default App;
