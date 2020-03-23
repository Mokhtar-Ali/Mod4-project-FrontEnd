import React from "react";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'react-bootstrap/Navbar' // css 
import LoginForm from '../components/LoginForm'
import Signup from "../components/Signup";


const NavBar = (props) => {
  return (

    <div >
      <NavLink to='/'> Home </NavLink>
      <NavLink to='/login'> Login </NavLink>
      <Route
        path="/login"
        render={() => (props.currentUser) ? props.currentUser.name : <LoginForm setUser={props.setUser}/> }
      />
      <NavLink to='/signup' > Signup </NavLink>
      <Route
        path="/signup"
        render={() => (!props.currentUser) ? <Signup setUser={props.setUser}/> : null}
        // (!props.currentUser) ? <LoginForm setUser={props.setUser}/> : props.currentUser.name}
      />
      {props.currentUser ? <button onClick={props.logout} >Logout</button> : null}
    </div>
  )
} 

export default NavBar;
