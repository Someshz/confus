import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import Main from './components/MainComponent.js';
import {Provider} from "react-redux";
import {ConfigurStore} from "./redux/ConfigurStore";
const store=ConfigurStore();

class App extends Component
 {
  
   
  render()
  {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
        <Main />
    </div>
    </BrowserRouter>
    </Provider>
  );
 }
}

export default App
