import React from "react";
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
    start: false 
  }

  switchButton = () => {
    this.setState({start: true})
  }


  render() {
    return(
      <Router>
        <div>
          <NavBar />
          {this.state.start ?  
            (<MainContainer />) : 
            (<div><Instructions /> <Button onClick={this.switchButton}> Start New Game </Button></div>)}
        </div>
      </Router>
    )
  }

}



export default App;