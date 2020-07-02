import React from 'react'
import "../Css/MainContainer.css"
import { connect } from 'react-redux'

function PlayerStats(props){

  
  return (
    <div className="player-stats">
      {props.user ? 
        <div>
          <p>Score: {props.score}</p>
          <p>Trees Planted: {props.plantedTrees} </p>
          <p>Trees Chopped Down: {props.choppedTrees}</p>
        </div>
        : null }

    </div>
  );
}

const msp = state => {
  return {
    score: state.score
  }
}

export default connect(msp)(PlayerStats)

