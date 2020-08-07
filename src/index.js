import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import './config/reactotron';
import {store, persistor} from './store';

import Repository from './page/index';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Repository />
    </PersistGate>
  </Provider>
);

export default App;
