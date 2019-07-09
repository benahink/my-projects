import React, { Component } from 'react';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
    state = {
        items: [], 
        id: uuid(),
        item: "", 
        editItem: false
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id, 
            title: this.state.item
        }

        const updatedItems = [...this.state.items, newItem]

        this.setState({
            items: updatedItems, 
            item: '', 
            id: uuid(), 
            editItem: false
        })
    }

    clearList = () => {
        this.setState({
            items: []
        })
    }

    handleDelete = (id) => {
        const items = this.state.items;
        const filteredItems = items.filter(item => item.id !== id)
        this.setState({
            items: filteredItems
        })
    }

    handleEdit = (id) => {
        const items = this.state.items;
        const filteredItems = items.filter(item => item.id !== id)
        
        const selectedItem = items.find(item => item.id === id)
        
        console.log(selectedItem)
        this.setState({
            items: filteredItems, 
            item: selectedItem.title, 
            editItem: true, 
            id: id
        })
    }

    render() { 
        return ( 
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 ml-4">
                    <h3 className="text-capitalize text-center">todo input</h3>
                    <TodoInput  item={this.state.item} 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                editItem={this.state.editItem}/>
                    <TodoList   items={this.state.items}
                                clearList={this.clearList}
                                handleDelete={this.handleDelete}
                                handleEdit={this.handleEdit}/>
                </div>
            </div>
        </div>
        );
    }
}
 
export default App;