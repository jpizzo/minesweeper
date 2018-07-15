import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GameShell from './GameShell';
import store from './store';
import './styles.css';

class App extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <Provider store={store}>
        <div className="test">
          <h1> Starter page </h1>
          <GameShell />
        </div>
      </Provider>
    )
  }
}

export default App;