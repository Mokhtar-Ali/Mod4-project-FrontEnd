import React from "react";
import { NavLink } from 'react-router-dom';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Navbar = () =>{
  return (

   <div className="navbar">
     <NavLink to= '/' > Home </NavLink> 
     <NavLink to= '/Login' > Login </NavLink> 
     <NavLink to= '/Signup' > Signup </NavLink> 
     <NavLink to= '/startGame' > Start </NavLink> 

  </div>
  )
}

export default Navbar;
