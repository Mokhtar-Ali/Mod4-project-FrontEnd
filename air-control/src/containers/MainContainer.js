import React from "react";
import '../Css/MainContainer.css'
import TreeContainer from "./TreeContainer";
import FirewoodContainer from "./FirewoodContainer";
import StatsContainer from "./StatsContainer";

class MainContainer extends React.Component {
  state = {
    user: {},
    trees: [],
    treesNum: 0
  }

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
      .then(response => response.json())
      .then(user => this.setState({ user: user, trees: user.trees, treesNum: user.trees.length}))
  }

  plantTree = () => { // plnt a tree will make a post fetch 
    let data = { user_id: 1, atmosphere_id: 1, image: ' ' }
    console.log('start fetching', data);
    fetch("http://localhost:3000/trees", { // changed to trees instead of users
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(tree => {
      let trees2 = [...this.state.trees]
      trees2.push(tree)
      this.setState({trees: trees2, treesNum: trees2.length})
    })
  }

  render() {
    // console.log(this.state.user);
    // console.log(this.state.trees);
    return (
      <div className="main-container">
        <StatsContainer user={this.state.user} />
        <TreeContainer user={this.state.user} trees={this.state.trees} plantTree={this.plantTree} treesNum={this.state.treesNum}/>
        <FirewoodContainer />
      </div>
    );
  }

}

export default MainContainer;
