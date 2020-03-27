import React from 'react'


function Tree(props) { 
  
  console.log(props.tree.size)
  
  return (
    <div className="tree">
      {props.tree.size === 'small'? <img src={props.tree.image} height='90px' /> : <img src={props.tree.image} height='120px' />} 
    </div>
  )
}

export default Tree;
