import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { BrowserRouter } from "react-router-dom";

import CdsContainer from "./containers/CdsContainer/cdsContainer";
import "./App.scss";

const reducer = (state = {}, action: any) => ({});

const store: Store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Route exact path="/cds" component={CdsContainer} />
            <Redirect from="/" to="/cds" />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
