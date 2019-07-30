
import React, { Component } from 'react';
import alien from '../images/alien.png'
import './Login.css';

class Home extends Component {
    render() { 
        return ( 
            <div className="home">
                <div className="lander">
                    <h1>Welcome Home</h1>
                    <img className='image-alien' src={alien} alt="#"></img>
                </div>
            </div>
        );
    }
}
 
export default Home;