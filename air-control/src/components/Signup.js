import React from 'react'
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../Css/Login.css";

const API = 'http://localhost:3000/users'

class Signup extends React.Component { 

    state = {
        name: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    //    document.getElementById('form').reset()
        if (this.state.name && this.state.password){
            fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(this.state)
            }).then(res => res.json())
            .then(response => {
              if(response.errors){
                alert(response.errors)
              } else {
                  this.props.setUser(response)
                // send them somewhere
                // storing the user object SOMEWHERE
                // this.props.setUser(response)
              }
            })
          } else {
            alert("Make sure you write your name and password right!!")
          }
      
            this.setState({name: '', password: ''})
    }

    render() {

        return (
            <div className="Login">
                <h3 style={{textAlign: 'center'}}>Create An Account</h3>
                <form onSubmit={this.handleSubmit} id='form'>
                    <FormGroup controlId="email" bsSize="large">
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
                        Sign up
                    </Button>
                </form>
            </div>
        )}
}

export default Signup