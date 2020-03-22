import React from "react";
import { NavLink } from 'react-router-dom';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar' // css 
import App from "../App";
import LoginForm from '../components/LoginForm'
import Signup from "../components/Signup";


const NavBar = () => {
  return (

    <div >
      <NavLink to='/'> Home </NavLink>
      <NavLink to='/login'> Login </NavLink>
      <Route
        path="/login"
        component={LoginForm}
      />
      <NavLink to='/signup'> Signup </NavLink>
      <Route
        path="/signup"
        component={Signup}
      />
    </div>
  )
}

export default NavBar;
