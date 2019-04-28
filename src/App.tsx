import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './stores/appStore';
import { CdsContainer } from './containers/Cds/CdsContainer';
import { CdContainer } from './containers/Cds/CdContainer';
import { MembersContainer } from './containers/Members/MembersContainer';
import { MemberContainer } from './containers/Members/MemberContainer';
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Switch>
            <Route exact path="/cds/:type" component={CdsContainer} aria-label="cds" />
            <Route exact path="/cds/:type/:number" component={CdContainer} aria-label="cd" />
            <Route exact path="/members/:generation" component={MembersContainer} aria-label="members" />
            <Route exact path="/member/:name" component={MemberContainer} aria-label="member" />
            <Redirect from="/" to="/cds/singles" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
