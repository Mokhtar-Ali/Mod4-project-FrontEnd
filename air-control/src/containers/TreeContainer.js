import React from 'react'
import Tree from '../components/Tree'
import "../Css/MainContainer.css"

// air-control/src/Css/MainContainer.css

class TreeContainer extends React.Component {



  render(){
    return (
      <div className="tree-container">
        <h1>Tree Container</h1>
        <Tree />
      </div>
    );

  }
}

export default TreeContainer;
