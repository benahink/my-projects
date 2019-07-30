import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withProvider } from "../GlobalProvider.js";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "", 
            password: "",
            errorMessage: ""
        }
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
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
        this.props.login(this.state)
        .then(() => this.props.history.push("/chatpage"))
        .catch(err => {
            this.setState({errorMessage: err.response.data.message})
        });
    }
    
    render() { 
        return ( 
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <h3>username</h3>
                        <FormControl
                        type="username"
                        value={this.state.username}
                        onChange={this.handleChange}
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
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
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
 
export default withProvider(Login);