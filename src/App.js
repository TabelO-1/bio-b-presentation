import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Audience from './Audience';
import Genetics from './Genetics';
import Research from './Research';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from "react-router-dom";
import { Route, Switch } from "react-router";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/audience">
              <Audience />
            </Route>
            <Route exact path="/genetics">
              <Genetics />
            </Route>
            <Route exact path="/reccomend">
              <Research />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
