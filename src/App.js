import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/home/home.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
