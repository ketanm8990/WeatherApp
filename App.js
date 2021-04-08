import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Router from './src/Router'
import store from './src/store'

const App = (props) => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;