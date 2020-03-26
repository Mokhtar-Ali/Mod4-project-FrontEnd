import React from 'react'


function Tree(props) { 
  
  
  return (
    <div className="tree">
      <img src={props.tree.image} height='50px' /> 
    </div>
  )
}

export default Tree;
