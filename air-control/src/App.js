import React, {Component} from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import NavBar from "./containers/Navbar";
import Instructions from "./components/Instructions"
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap 
import { Button } from 'react-bootstrap' // bootstrap buttons

class App extends React.Component {

  state = {
    start: false,
    currentUser: null,

  }

  switchButton = () => {
    this.setState({start: true})
  }

  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
        localStorage.user_id = user.id
        this.props.history.push('/')
      }
    )}

    logout = () => {
      this.setState({
        currentUser: null
      }, () => {
        localStorage.removeItem('user_id')
        this.props.history.push('/')
      }
      )}

  render() {
    
    return(
      <Router>
        <div>
          <NavBar setUser={this.setUser} logout={this.logout} currentUser={this.state.currentUser}/>
          {/* {this.state.start ?  
            (<MainContainer />) : 
            (<div><Instructions /> <Button onClick={this.switchButton}> Start New Game </Button></div>)} */}
        </div>
      </Router>
    )
  }

}



export default App;