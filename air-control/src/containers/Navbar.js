import React from "react";
import { NavLink } from 'react-router-dom';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar' // css 
import App from "../App";
import Login from '../components/Login'


const NavBar = () => {
  return (

    <div >
      <NavLink to='/'> Home </NavLink>
      <NavLink to='/login'> Login </NavLink>
      <Route
        path="/login"
        component={Login}
      />
      <NavLink to='/signup'> Signup </NavLink>
    </div>
  )
}

export default NavBar;
