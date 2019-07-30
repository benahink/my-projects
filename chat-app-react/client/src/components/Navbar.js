import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withProvider } from '../GlobalProvider.js';
import './Login.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="navbar">
                <Link to="/signup" className="navbar-buttons">sign-up</Link>
                <Link to="/login" className="navbar-buttons">login</Link>
                <Link exact to="/" onClick={this.props.logout} className="navbar-buttons">logout</Link>
            </div>
         );
    }
}
 
export default withProvider(Navbar);