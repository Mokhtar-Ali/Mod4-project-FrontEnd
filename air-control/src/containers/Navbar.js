import React from "react";
import { NavLink } from 'react-router-dom';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar' // css 
import App from "../App";


const NavBar = () => {
  return (

    <div >
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/login'> Login </NavLink>
        <NavLink to='/signup'> Signup </NavLink>
    </div>
  )
}

export default NavBar;
