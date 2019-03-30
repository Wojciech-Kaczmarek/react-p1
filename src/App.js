import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Main from './components/Main';
import About from './components/About';
import Content from './components/Content';
import './App.css';
import './h1.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/content" exact component={Content} />
      </BrowserRouter>
    );
  }
}

export default App;
