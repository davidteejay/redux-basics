import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import User from './components/User'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <User/>
    </Provider>
  );
}

export default App;
