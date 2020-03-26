import React from 'react'
import Tree from '../components/Tree'
import "../Css/MainContainer.css"

class TreeContainer extends React.Component {

  
  render(){
 
    return (
      <div className="tree-container">
        {this.props.trees.map(tree => 
      <Tree 
      tree={tree}
      key={tree.id}
      atmosphere={this.props.atmosphere}
      />
       
    )}
      </div>
    );

  }
}

export default TreeContainer;
