import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./page/Login/Login";
import CreateClass from "./page/CreateClass/CreateClass";
import ClassList from "./page/ClassList/ClassList";
import StartLive from "./page/StartLive/StartLive";
import Live from "./page/Live/Live";

function App() {
  document.body.style.backgroundColor = "rgb(247, 247, 250)";
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" render={(props) => <Login {...props} />} />
        <Route exact={true}
          render={() => {
            if (localStorage.getItem("user")) return <ClassList />;
            else return <Redirect from='/class' to='/'/>;
          }} path="/class"/>
        <Route path="/createClass/:id" component={CreateClass} render={() => {
            if (localStorage.getItem("user")) return <CreateClass/>;
            else return <Redirect from='/createClass/:id' to='/'/>;
          }}>
        </Route>
        <Route path="/live/:id/:channel" component={Live} render={() => {
            if (localStorage.getItem("user")) return <Live />;
            else return <Redirect from='/live/:id/:channel' to='/'/>;
          }} ></Route>
        <Route path="/startLive/:id/:channel"  component={StartLive} render={() => {
            if (localStorage.getItem("user")) return <StartLive />;
            else return <Redirect from='/startLive/:id/:channel' to='/'/>;
          }} >
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
