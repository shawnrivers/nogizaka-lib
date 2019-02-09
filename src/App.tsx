import * as React from "react";
import { Route, Redirect, Switch } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { CdsContianer, ICdsContainerProps } from "./containers/CdsContainer";
import "./App.scss";
import { store } from "./stores/appStore";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <CdsContianer {...{} as ICdsContainerProps} />
        </div>
      </Provider>
    );
  }
}

export default App;
