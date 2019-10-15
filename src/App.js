import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Navbar>
                <Route exact path="/">
                    Welcome to the Library Management System
                </Route>
                <Route exact path="/about">
                    The About Page
                </Route>
            </Navbar>
        </div>
    );
}

export default App;