import React from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import Navbar from "./containers/Navbar";
import Instructions from "./components/Instructions"
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Navbar />
          <Instructions /> 
          {this.state.start ?  <MainContainer /> : <button onClick={this.switchButton}>Start New Game</button>}
        </div>
      </Router>
    )
  }

}



export default App;

  // // ReactDOM.render(
  // //   <Router>
  // //     <div>
  // //       <Route path="/" component={Home} />
  // //     </div>
  // //   </Router>
  // // );

  // function App () 
  //   return(
  //       <div>
  //         <h1>Home container</h1>
  //       </div>
      
  //   )
  


  //   // document.getElementById("root")
