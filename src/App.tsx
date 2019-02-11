import React from "react";
import posed, { PoseGroup } from "react-pose";
import { Route, Redirect, Switch } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { CdsContianer } from "./containers/CdsContainer";
import "./App.scss";
import { store } from "./stores/appStore";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="nogizaka-lib">
        <div className="app">
          <Switch>
            <Route exact path="/cds/:type" component={CdsContianer} />
            <Redirect from="/" to="/cds/singles" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
