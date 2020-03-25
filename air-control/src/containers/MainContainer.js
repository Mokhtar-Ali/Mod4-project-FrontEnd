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
    atmosphere: null,
    plantedTrees: 0,
    choppedTrees: 0
  }

  componentDidMount() {
    this.setState({
      trees: [...this.props.trees],
      atmosphere: {...this.props.atmosphere},
      treesNum: this.props.trees.length,
      plantedTrees: this.props.trees.length,
      choppedTrees: 0
    })
  }

  plantTree = () => { // plnt a tree will make a post fetch 
    let data = {atmosphere_id: this.state.atmosphere.id}
    // console.log('start fetching', data);
    fetch( TreesApi, { // 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(tree => {
      let trees2 = [...this.state.trees]
      trees2.push(tree)
      this.setState({trees: trees2, treesNum: trees2.length, plantedTrees: this.state.plantedTrees + 1})
    })
  }

  cutTree = () => {   
    let trees2 = [...this.state.trees] // copying main array of trees
    let treeId = trees2[0].id  // getting id 
    let tree = trees2.find(t => t.id === treeId) // getting the tree obj
    let index = trees2.indexOf(tree) // find index
    trees2.splice(index , 1) // remove tree from copied array 

    fetch(`http://localhost:3000/trees/${treeId}`, {
      method: 'DELETE'
    })
    this.setState({trees: trees2, treesNum: trees2.length, choppedTrees: this.state.choppedTrees + 1})
  }

  waterTree = () => { // will pick a tree && do fetch PATCH on that tree, conditinal to check which tree' size is small first & medium second 
    let smallTrees = this.state.trees.filter(tree => tree.size === 'small')
    let mediumTrees = this.state.trees.filter(tree => tree.size === 'medium')

    if (smallTrees) {
      let data = {size: 'medium', oxygen: 5, carbon_dioxide: -4, firewood: 1}
      let id = smallTrees[0].id 
      fetch(`http://localhost:3000/trees/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })//.then(resp => resp.json())
    .then(response => {
      let trees2 = [...this.state.trees]
      let index = trees2.findIndex(t => t.id === id)
      trees2.splice(index , 1, response)
      this.setState({trees: trees2})
      // let tree = trees2.filter(t => t.id === response.id)
      //   let idx = pizzas2.findIndex(pizza => pizza.id === id)
      //   pizzas2[idx] = body
      //   this.setState({pizzas: pizzas2})
      // debugger
    })
    }
  }
 


  render() {
    // console.log('props', this.props.trees);
    console.log('state', this.state.trees);
    // console.log(this.state.treesNum);
    // console.log(this.state.atmosphere.oxygen)
    return (
      <div className="main-container">
        <StatsContainer atmosphere={this.state.atmosphere} user={this.props.currentUser} cutTree={this.cutTree} plantTree={this.plantTree} treesNum={this.state.treesNum} trees={this.state.trees} waterTree={this.waterTree} plantedTrees={this.state.plantedTrees} choppedTrees={this.state.choppedTrees}/>
        <TreeContainer user={this.props.currentUser} trees={this.state.trees} treesNum={this.state.treesNum} />
        <FirewoodContainer />
      </div>
    );
  }

}

export default MainContainer;
