// import React from 'react'
import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../Css/Login.css";

class Signup extends React.Component {

    render() {
        return (
            <div className="Login">
                <form >
                    <FormGroup controlId="email" bsSize="large">
                        <label>Name</label>
                        <FormControl
                            autoFocus
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <label>Password</label>
                        <FormControl
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" type="submit">
                        Sign up
                    </Button>
                </form>
            </div>
        )}
}

export default Signup