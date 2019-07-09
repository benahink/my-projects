import React, { Component } from 'react';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import 'bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
        <div>
            <h1>
                Let's get it started!!  
            </h1> 
            <TodoInput />
            <TodoList />
        </div>
        );
    }
}
 
export default App;