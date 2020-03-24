// import React from 'react'
import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../Css/Login.css";

class LoginForm extends React.Component {

    state = {
        name: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify(this.state)
            
        }).then(res => res.json())
        .then(response => {
          if (response.errors){
            alert(response.errors)
          } else {
            this.props.setUser(response)
            window.close()
          }
        })
        this.setState({name: '', password: ''})
        
      }


    render() {
        return (
            <div className="Login">
                <h3>Log In To Play</h3>
                <form onSubmit={this.handleSubmit} id='form'>
                    <FormGroup controlId="email" bssize="large">
                        <label>Name</label>
                        <FormControl
                            autoFocus
                            type="text"
                            name='name'
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <label>Password</label>
                        <FormControl
                            type="password"
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button block bsSize="large" type="submit">
                        Login
                    </Button>
                </form>
            </div>
        )}
}

export default LoginForm