import React from "react";
import '../Css/MainContainer.css'
import TreeContainer from "./TreeContainer";
import FirewoodContainer from "./FirewoodContainer";
import StatsContainer from "./StatsContainer";


const TreesApi = "http://localhost:3000/trees"

class MainContainer extends React.Component {
  state = {
    trees: [],
    treesNum: 0,
  }

  componentDidMount() {

    // fetch('http://localhost:3000/atmospheres', {
    //   method: 'Post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({user_id: this.props.currentUser.id})
    // }).then(resp => resp.json())
    // .then(resp => console.log(resp))
    // .then(response => this.setState({atmosphere: response, trees: response.trees, treesNum: 10}))
    
  //   fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
  //     .then(response => response.json())
  //     .then(response => this.setState({ user: response, trees: response.atmosphere.trees, treesNum: response.response.trees.length}))
  }

  plantTree = () => { // plnt a tree will make a post fetch 
    if (!this.state.trees) {
      this.setState({trees: this.state.atmosphere.trees, treesNum: this.state.atmosphere.trees})
    }
    let data = {atmosphere_id: this.state.atmosphere.id}
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

  cutTree = () => {   
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
    console.log(this.props.trees);
    // console.log(this.state.treesNum);
    // console.log(this.state.atmosphere)
    return (
      <div className="main-container">
        <StatsContainer user={this.props.currentUser} cutTree={this.cutTree} plantTree={this.plantTree} treesNum={this.state.treesNum} trees={this.state.trees} />
        <TreeContainer user={this.props.currentUser} trees={this.state.trees} plantTree={this.plantTree} treesNum={this.state.treesNum} cutTree={this.cutTree}/>
        <FirewoodContainer />
      </div>
    );
  }

}

export default MainContainer;
