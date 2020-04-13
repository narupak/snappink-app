import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Auth from './page/auth';
import Template from './page/template';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/">
            <Template />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
