import React, { Component } from 'react';
import { FormGroup, FormControl } from "react-bootstrap";
import {withProvider} from "../GlobalProvider.js";
import io from "socket.io-client";

class ChatPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            message:'',
            messages:[]
        }

        this.socket = io('localhost:4050');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });
        
        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };
    }

    validateForm() {
        return this.state.message;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })

    }
   
    handleSubmit = event =>{
        event.preventDefault();
        this.socket.emit('SEND_MESSAGE', {
            author: this.props.user.username,
            message: this.state.message
        });
        this.setState({message: ''});    
    }

    render() { 
        return ( 
            <div className="chat-box">
                <div className="sent-messages">
                {this.state.messages.map(message => {
                    return (
                        <div className='chat-interface'>
                            <div className='username'>{message.author}:</div>
                            <div className='the-message'>{message.message}</div>
                        </div>
                    )
                })}
                </div> 
                <div className="area">
                    <h3 className="chatpage-username">{this.props.user.username}</h3>
                </div>
                <div className='the-form'>
                    <form className='form-layout' onSubmit={this.handleSubmit}>
                        <FormGroup controlId="message">
                        <FormControl
                            className='the-input'
                            autoFocus
                            type="text"
                            value={this.state.message}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <div className='the-button-container'>
                            <button
                                className='the-button'
                                disabled={!this.validateForm()}
                                type="submit"
                            > Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default withProvider(ChatPage);