import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Login from './Login.js';
import Signup from "./Signup.js";
import ChatPage from "./ChatPage.js";


export default () => 
    <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/logout" component={Logout} /> */}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/chatpage" component={ChatPage} />
    </Switch>