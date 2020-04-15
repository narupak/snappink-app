import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "./page/auth/Auth";
import CreateClass from "./page/create-class/CreateClass";
import ListLiveFit from "./page/list-live-fit/ListLiveFit";
import StartLive from "./page/start-live/StartLive";
import Live from "./page/live/Live";

function App() {
  document.body.style.backgroundColor = "rgb(247, 247, 250)";
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" render={(props) => <Auth {...props} />} />
        <Route exact={true}
          render={() => {
            if (localStorage.getItem("user")) return <ListLiveFit />;
            else return <Redirect from='/fit' to='/'/>;
          }} path="/fit"/>
        <Route path="/createClass">
          <CreateClass />
        </Route>
        <Route path="/live/:channel" component={Live}></Route>
        <Route path="/startLive">
          <StartLive />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
