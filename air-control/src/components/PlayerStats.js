import React from 'react'
import "../Css/MainContainer.css"

export default function PlayerStats(props){

  
  return (
    <div className="player-stats">
      {props.user ? 
        <div>
          <p>Player: {props.user.name}</p>
          <p>Trees Planted: {props.plantedTrees} </p>
          <p>Trees Chopped Down: {props.choppedTrees}</p>
        </div>
        : null }

    </div>
  );
}


