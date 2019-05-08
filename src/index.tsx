import * as React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement !== null && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, document.getElementById('root'));
}

serviceWorker.register();
