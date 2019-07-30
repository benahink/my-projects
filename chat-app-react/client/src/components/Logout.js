import React, { Component } from "react";
import "./Login.css";
import { withProvider } from "../GlobalProvider.js";

const Logout = () => {
    return ( 
        <>
        <div className="logout">
            <div className="lander1">
                <h1>Peace Out</h1>
                <img  className='image-alien'src='https://i.imgur.com/adDEPRg.png'></img>
            </div>
        </div>
        </>
    );
}
 
export default withProvider(Logout);