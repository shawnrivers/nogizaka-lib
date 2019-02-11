import React from "react";
import { Route, Redirect, Switch } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { CdsContianer } from "./containers/CdsContainer";
import "./App.scss";
import { store } from "./stores/appStore";

const App = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/cds/:type"} component={CdsContianer} />
            <Redirect from={process.env.PUBLIC_URL + "/"} to={process.env.PUBLIC_URL + "/cds/singles"} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
