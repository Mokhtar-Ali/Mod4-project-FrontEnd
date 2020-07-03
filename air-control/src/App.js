import React from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import NavBar from "./containers/Navbar";
import Instructions from "./components/Instructions";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import { Button } from "react-bootstrap"; // bootstrap buttons
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from './components/LoginForm'
import Signup from "./components/Signup";
import { connect } from 'react-redux'
import { assignUser, removeUser, assignAtmosphere, assignTrees } from './actionCreator'


class App extends React.Component {
  state = {
    start: false,
    atmosphere: null, // Redux
    trees: [], // Redux
  };
  // test

  componentDidMount() {
    const user_id = localStorage.user_id;
    if (user_id) {
      fetch("http://localhost:3000/auto_login", {
        headers: {
          Authorization: user_id
        }
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors);
          } else {
            assignUser(response)
          }
        });
    }
  }

  // applyTwoFuncs = (response) => {
  //   this.props.assignAtmosphere(response)
  //   // this.props.assignTrees(response.trees)
  //   // console.log('response', response);
  //   console.log('trees', response.trees);
  // }

  initiateGame = () => {  // Redux
    fetch("http://localhost:3000/atmospheres", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: this.props.currentUser.id })
    })
      .then(resp => resp.json())
      .then(response => this.props.assignAtmosphere(response))  
      this.setState({start: true})
  };

  setUser = user => {
   assignUser(user)
        localStorage.user_id = user.id;
        // this.props.history.push("/")
  }

  logout = () => { // Not Working for Navbar
    removeUser()
    localStorage.removeItem("user_id");
    this.props.history.push("/");
  };


  render() {
    console.log(this.props.trees);
    console.log(this.props.atmosphere);
    return (
      <div className="nav-bar">

        <NavBar
          setUser={this.setUser}
          logout={this.logout}
          currentUser={this.props.currentUser}
        />

        <div>
          <div className="instructions">
            {this.state.start ? null : this.props.currentUser ? (
              <div>
                {" "}
                <Instructions />{" "}
                <Button onClick={this.initiateGame}> Start New Game </Button>
              </div>
            ) : (
                <Instructions />
              )}
          </div>
          {/*  */}
          {this.props.currentUser ? null : <div> <LoginForm /> <Signup /></div>} {/* Needs autologin work */}

          {this.state.start ? (
            <MainContainer
              atmosphere={this.props.atmosphere}
              trees={this.props.trees}
            />
          ) : null}
        </div>
      </div>
    );
  }
}


const msp = state => {
  return {
    score: state.score,
    trees: state.trees,
    atmosphere: state.atmosphere,
    currentUser: state.currentUser,
  }
}

export default connect(msp, { assignUser, removeUser, assignAtmosphere, assignTrees })(App);

