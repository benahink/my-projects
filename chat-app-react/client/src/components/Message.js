import React, { Component } from 'react'

class Message extends Component {  
    constructor(props) {
        super(props)
    }

    changeView = () => {
        this.props.changeView('sign-up')
    }

    render() {
        return (
            <div className="message">
                
            </div>
        )
    }
}

export default Message;