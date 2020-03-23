import React from "react";
import '../Css/MainContainer.css'
import TreeContainer from "./TreeContainer";
import FirewoodContainer from "./FirewoodContainer";
import StatsContainer from "./StatsContainer";
import Tools from "../components/Tools"

const TreesApi = "http://localhost:3000/trees"

class MainContainer extends React.Component {
  state = {
    user:null,
    trees: [],
    treesNum: 0
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
      .then(response => response.json())
      .then(response => this.setState({ user: response, trees: response.trees, treesNum: response.trees.length}))
  }

  plantTree = () => { // plnt a tree will make a post fetch 
    let data = { user_id: this.state.user.id, atmosphere_id: 1, image: ' ' }
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
    let trees2 = [...this.state.trees] // copying main array of trees
    let treeId = trees2[0].id  // getting id 
    let tree = trees2.find(t => t.id === treeId) // getting the tree obj
    let index = trees2.indexOf(tree) // find index
    trees2.splice(index , 1) // remove tree from copied array 
  
 
    fetch(`http://localhost:3000/trees/${treeId}`, {
      method: 'DELETE'
    })
    this.setState({trees: trees2, treesNum: trees2.length})
    
  }
 


  render() {
    // console.log(this.state.user);
    // console.log(this.state.trees);
    return (
      <div className="main-container">
        <StatsContainer user={this.props.currentUser} />
        <TreeContainer user={this.props.currentUser} trees={this.state.trees} plantTree={this.plantTree} treesNum={this.state.treesNum} cutTree={this.cutTree}/>
        <FirewoodContainer />
        <Tools /> 
      </div>
    );
  }

}

export default MainContainer;
