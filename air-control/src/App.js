import React from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import NavBar from "./containers/Navbar";
import Instructions from "./components/Instructions"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap 
import { Button } from 'react-bootstrap' // bootstrap buttons

class App extends React.Component {

  state = {
    start: false,
    currentUser: null,
    atmosphere: null
  }

  componentDidMount() {
    const user_id = localStorage.user_id
    
    if (user_id) {
      fetch('http://localhost:3000/auto_login', {
        headers: {
          'Authorization': user_id
        }
      }).then(resp => resp.json()).then(response => {
        if (response.errors) {
          alert(response.errors)
        }else {
          this.setState({currentUser: response})
        }
      })
    }
  }

  initiateGame = () => {
      fetch('http://localhost:3000/atmospheres', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id: this.state.currentUser.id})
      }).then(resp => resp.json())
      .then(response => this.setState({atmosphere: response,start: true}))
  }

  

  // switchButton = () => {          // added it to initiate game 
  //   this.setState({start: true})
  // }

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
    // console.log(this.state.atmosphere);
    // console.log(this.state.currentUser.atmospheres);
    
    return(
      <div>
        <NavBar setUser={this.setUser} logout={this.logout} currentUser={this.state.currentUser}/>
        <div>
          <div>
          {this.state.start ? null : this.state.currentUser ? (<div>  <Instructions /> <Button onClick={this.initiateGame}> Start New Game </Button></div>) : <Instructions />}
          </div>
          {this.state.start ?  
            (<MainContainer currentUser={this.state.currentUser} atmosphere={this.state.atmosphere}/>) : null}
        </div>
        </div>
    )
  }

}



export default App;