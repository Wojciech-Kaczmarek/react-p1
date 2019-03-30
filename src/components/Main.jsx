import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'; 

const Main = () => (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>kiss me</h1>
        <Link
            className="App-link"
            to="/about"
        >
            About
        </Link>
        
        <Link
            className="App-link"
            to="/Content"
        >
        Content
        </Link>

        </header>
    </div>
);

export default Main;
