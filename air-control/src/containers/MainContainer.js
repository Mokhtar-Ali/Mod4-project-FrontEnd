import React from "react";
import '../Css/MainContainer.css'
import TreeContainer from "./TreeContainer";
import FirewoodContainer from "./FirewoodContainer";
import StatsContainer from "./StatsContainer";
import Tools from "../components/Tools"

const TreesApi = "http://localhost:3000/trees"

class MainContainer extends React.Component {
  state = {
    trees: [],
    treesNum: 0
  }

  // componentDidMount() {
  //   fetch("http://localhost:3000/users/1")
  //     .then(response => response.json())
  //     .then(user => this.setState({ user: user, trees: user.trees, treesNum: user.trees.length}))
  // }

  plantTree = () => { // plnt a tree will make a post fetch 
    let data = { user_id: 1, atmosphere_id: 1, image: ' ' }
    console.log('start fetching', data);
    fetch( TreesApi, { // changed to trees instead of users
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

  cutTree = () => {  // need to work on it more 
    console.log('cutting tree')
    let trees2 = [...this.state.trees]
    let firstTreeId = trees2[0].id
    trees2.splice(firstTreeId, 1)
    console.log(firstTreeId)
    console.log(trees2);
    

    fetch(`http://localhost:3000/trees/${firstTreeId}`, {
      method: 'DELETE'
    })
    this.setState({trees: trees2, treesNum: trees2.length})
    console.log(trees2)
    
  }
 


  render() {
    // console.log(this.state.user);
    // console.log(this.state.trees);
    return (
      <div className="main-container">
        <StatsContainer user={this.state.user} />
        <TreeContainer user={this.state.user} trees={this.state.trees} plantTree={this.plantTree} treesNum={this.state.treesNum} cutTree={this.cutTree}/>
        <FirewoodContainer />
        <Tools plantTree={this.plantTree} cutTree={this.cutTree}/>
      </div>
    );
  }

}

export default MainContainer;
