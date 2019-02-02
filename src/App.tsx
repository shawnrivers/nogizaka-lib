import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { CdsContianer } from "./containers/CdsContainer";
import "./App.scss";
import { store } from "./stores/appStore";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Route exact path="/" component={CdsContianer} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
