import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.js';
import Routes from './components/Routes.js';
import './components/Login.css';

class App extends Component {

    getUser() {
        axios.get("/chat-app").then(response => {
            console.log(response.data)
        })
    }

    render() {
        return(
            <div className="app-container">
                <Navbar />
                <Routes />
            </div>
        )
    }
 }
 
 export default App;