import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Stations from "./components/Stations";
import Stories from "./components/Stories";
import "./Sass/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stations" component={Stations} />
          <Route path="/stories" component={Stories} />
          <Route path="/contact" component={Contacts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
