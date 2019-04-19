import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { CdsContainer } from './containers/CdsContainer';
import './App.scss';
import { store } from './stores/appStore';
import { MembersContainer } from './containers/MembersContainer';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Switch>
            <Route exact path="/cds/:type" component={CdsContainer} />
            <Route exact path="/members/:generation" component={MembersContainer} />
            <Redirect from="/" to="/cds/singles" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
