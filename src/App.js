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
