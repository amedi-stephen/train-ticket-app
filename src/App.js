import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Stations from "./components/Stations";
import Stories from "./components/Stories";
import Contacts from "./components/Contacts";

import "./Sass/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stations" component={Stations} />
        <Route path="/stories" component={Stories} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
}

export default App;
