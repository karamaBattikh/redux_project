import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import './App.css';
import Count from './Component/Count';
import Button from './Component/Button';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <header className="App-header">
          <Count />
          <Button />
        </header>
      </div>
    </Provider>
  );
}

export default App;
