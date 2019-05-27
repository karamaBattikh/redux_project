import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import './App.css';
import { Count, Button } from './Component/CountComponent';
import Friends from './Component/FriendComponent';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <div className="App-div">
          <Count />
          <Button />
        </div>
        <hr />
        <div className="App-div">
         <Friends />
        </div>
      </div>
    </Provider>
  );
}

export default App;
