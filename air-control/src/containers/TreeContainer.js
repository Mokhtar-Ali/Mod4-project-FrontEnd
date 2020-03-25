import React from 'react'
import Tree from '../components/Tree'
import "../Css/MainContainer.css"

// air-control/src/Css/MainContainer.css

class TreeContainer extends React.Component {

  // state = {
  //   treesNum: this.props.trees.length
  // }

  // increaseTrees = () => {
  //   this.setState({treesNum: this.state.treesNum + 1})
  // }

  
  render(){

    return (
      <div className="tree-container">
        <h1>Tree Container</h1>

        {this.props.trees.map(tree => 
      <Tree 
      tree={tree}
      key={tree.id}/>
    )}
      </div>
    );

  }
}

export default TreeContainer;
