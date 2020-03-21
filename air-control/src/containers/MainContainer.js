import React from "react";
import TreeContainer from "./TreeContainer";
import FirewoodContainer from "./FirewoodContainer";
import StatsContainer from "./StatsContainer";

class MainContainer extends React.Component() {

  state = { trees: []}

//   componentDidMount() {
//   fetch(`http://localhost:3000/users/${id}`)
//   .then(response => response.json())
//   .then(trees => this.setState({ trees: trees }));
// }

render(){
  return (
    <div className="main-container">
      <h1>Main container</h1>
      <StatsContainer />
      <TreeContainer />
      <FirewoodContainer />
    </div>
  );

}
}

export default MainContainer;
