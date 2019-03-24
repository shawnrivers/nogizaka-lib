import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CdsContainer } from './containers/CdsContainer';
import './App.scss';
import { store } from './stores/appStore';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Switch>
            <Route exact path="/cds/:type" component={CdsContainer} />
            <Redirect from="/" to="/cds/singles" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
