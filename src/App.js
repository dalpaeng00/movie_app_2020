import React from "react";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";
import About from "./route/About";
import Home from "./route/Home";
import Navigation from "./component/Navigation";
import Detail from "./route/Detail";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
      </HashRouter>
    );
  }
}

export default App;
