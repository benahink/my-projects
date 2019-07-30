
import React, { Component } from 'react';
import './Login.css';

class Home extends Component {
    render() { 
        return ( 
            <div className="home">
                <div className="lander">
                    <h1>Welcome Home</h1>
                    <img className='image-alien' src='https://i.imgur.com/adDEPRg.png' alt="#"></img>
                </div>
            </div>
        );
    }
}
 
export default Home;