import React from "react";
import "../Css/MainContainer.css";
import TreeContainer from "./TreeContainer";
import FirewoodContainer from "./FirewoodContainer";
import StatsContainer from "./StatsContainer";
import { connect } from 'react-redux'
import { increaseScore, decreaseScore} from '../actionCreator'

const TreesApi = "http://localhost:3000/trees";

class MainContainer extends React.Component {
  state = {
    trees: [],
    treesNum: 0,
    atmosphere: null,
    plantedTrees: 0,
    choppedTrees: 0,
    firewoodCount: 0,
  };


  componentDidMount() {
    this.setState({
      trees: [...this.props.trees],
      atmosphere: { ...this.props.atmosphere },
      treesNum: this.props.trees.length,
      plantedTrees: this.props.trees.length,
      choppedTrees: 0
    });
  }

  plantTree = () => {
    // plnt a tree will make a post fetch
    let data = { atmosphere_id: this.state.atmosphere.id };
    // console.log('start fetching', data);
    fetch(TreesApi, {
      //
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(tree => {
        let trees2 = [...this.state.trees];
        trees2.push(tree);
        this.setState({
          trees: trees2,
          treesNum: trees2.length,
          plantedTrees: this.state.plantedTrees + 1
        });
        this.props.increaseScore() // Redux
      });
  };

  cutTree = () => {
    if (this.state.trees.length >= 1) {
      console.log(this.state.trees, "trees?");
      let trees2 = [...this.state.trees]; // copying main array of trees
      let treeId = trees2[0].id; // getting id
      let tree = trees2.find(t => t.id === treeId); // getting the tree obj
      let index = trees2.indexOf(tree); // find index
      trees2.splice(index, 1); // remove tree from copied array

      fetch(`http://localhost:3000/trees/${treeId}`, {
        method: "DELETE"
      });
      this.setState({
        trees: trees2,
        treesNum: trees2.length,
        choppedTrees: this.state.choppedTrees + 1,
        firewoodCount: this.state.firewoodCount + 1
      });
      this.props.decreaseScore() // Redux
    } else {
      alert("You cut down all the trees 😭 Sorry, you lose!");
    }
  };

  waterTree = () => {
    // will pick a tree && do fetch PATCH on that tree, conditinal to check which tree' size is small first & medium second
    let smallTrees = this.state.trees.filter(tree => tree.size === "small");
    let mediumTrees = this.state.trees.filter(tree => tree.size === "medium");
    let myTrees = [...this.state.trees]
    let data;
    if (smallTrees.length >= 1) {
      data = { size: "medium", oxygen: 5, carbon_dioxide: -4, firewood: 1 };
      let id = smallTrees[0].id;
      fetch(`http://localhost:3000/trees/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(resp => resp.json())
        .then(response => {
          let trees2 = [...this.state.trees];
          let index = trees2.findIndex(t => t.id === id);
          trees2.splice(index, 1, response);
          this.setState({ trees: trees2 });
          smallTrees.splice(0, 1)
          console.log(smallTrees, 'small trees?')
        });
    } else if (smallTrees.length >= 1 && mediumTrees) {
      data = { size: "large", oxygen: 7, carbon_dioxide: -6, firewood: 2 };
      let id = smallTrees[0].id;
      fetch(`http://localhost:3000/trees/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(resp => resp.json())
        .then(response => {
          let trees2 = [...this.state.trees];
          let index = trees2.findIndex(t => t.id === id);
          trees2.splice(index, 1, response);
          // debugger
          this.setState({ trees: trees2 });
        });
    } else {
      alert("All trees have been watered and there's more oxygen for everybody!😁");
    }
  }; 

  render() {
    // console.log(this.props.score)
    
    return (
      <div className="main-container">
        <div className='top'>
        <StatsContainer
          atmosphere={this.state.atmosphere}
          user={this.props.currentUser}
          cutTree={this.cutTree}
          plantTree={this.plantTree}
          treesNum={this.state.treesNum}
          trees={this.state.trees}
          waterTree={this.waterTree}
          plantedTrees={this.state.plantedTrees}
          choppedTrees={this.state.choppedTrees}
          // score={this.props.score}
        />
          </div>
        <div className="wrappers">
        <FirewoodContainer firewoodCount={this.state.firewoodCount} />
        <TreeContainer
          user={this.props.currentUser}
          trees={this.state.trees}
          treesNum={this.state.treesNum}
          atmosphere={this.state.atmosphere}
        />
        
      </div>
        </div>
    );
  }
}

const msp = state => {
  return {
    currentUser: state.currentUser,
    score: state.score
  }
}

// const mdp = dispatch => {
//   return {

//   }
// }
export default connect(msp, { increaseScore, decreaseScore} )(MainContainer);

