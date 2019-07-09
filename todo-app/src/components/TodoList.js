import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>
                    TodoList
                </h1>
                <TodoItem />
            </div>
         );
    }
}
 
export default TodoList;