import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import NewBooks from './components/NewBooks';
import MyAccount from './components/MyAccount';

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
                <Route exact path="/new-books">
                    <NewBooks />
                </Route>
                <Route exact path="/my-account">
                    <MyAccount />
                </Route>
            </Navbar>
        </div>
    );
}

export default App;