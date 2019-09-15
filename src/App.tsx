
import * as React from 'react';

// import './App.css';
import "./App.css"
import Router from "./router"
import store from "./store"
import { Provider } from "mobx-react"

class App extends React.Component {
  public render() {
    return (
      <Provider {...store}>
 <div className="App">
        <Router />
      </div>
      </Provider>
     
    );
  }
}

export default App;
