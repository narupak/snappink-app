import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Auth from './page/auth/Auth';
import CreateClass from './page/create-class/CreateClass';
import Template from './page/list-live-fit/ListLiveFit';
import Live from './page/live/Live';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/fit">
            <Template />
          </Route>
          <Route path="/createClass">
            <CreateClass />
          </Route>
          <Route path="/">
            <Live />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
