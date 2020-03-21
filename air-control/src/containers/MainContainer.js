import React from "react";
import '../Css/MainContainer.css'
import TreeContainer from "./TreeContainer";
import FirewoodContainer from "./FirewoodContainer";
import StatsContainer from "./StatsContainer";

class MainContainer extends React.Component {
  state = { user: {} };

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
      .then(response => response.json())
      .then(user => this.setState({ user: user, trees: [1, 2, 3] }));
  }

  render() {
    console.log(this.state.user);
    console.log(this.state.user.trees);
    return (
      <div className="main-container">
        <StatsContainer />
        <TreeContainer />
        <FirewoodContainer />
      </div>
    );
  }

}

export default MainContainer;
