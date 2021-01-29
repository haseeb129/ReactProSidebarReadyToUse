	// import React from "react";
import Layout from "./Layout";

import "./styles/App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("App props", this.props);
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Redirect to="/home" />;
              }}
            />
            <Route path="/home" render={(props) => <Layout {...props} />} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
