import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";
import { withProvider } from "../GlobalProvider.js"

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "", 
            password: "", 
        }
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signup(this.state)
        .then(() => this.props.history.push("/chatpage"))
        .catch((err) => {
            this.setState({errorMessage: err.response.data.message})
        });
    }
    
    render() { 
        return ( 
            <div className="signup">
                <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                        <h3>username</h3>
                        <FormControl
                        value={this.state.username}
                        onChange={this.handleChange}
                        type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <h3>password</h3>
                        <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        />
                    </FormGroup>
                    
                    <Button
                        block
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Sign-up
                    </Button>
                </form>
                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }
            </div>
        );
    }
}
 
export default withProvider(Signup);