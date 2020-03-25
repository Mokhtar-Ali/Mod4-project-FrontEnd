import React from 'react'
import "../Css/MainContainer.css"

class PlayerStats extends React.Component {

  state = {
    
  }

render() {
  return (
    <div className="player-stats">
      <p>Player: {this.props.user.name}</p>
      <p>Trees Planted: {this.props.plantedTrees} </p>
      <p>Trees Chopped Down: {this.props.choppedTrees}</p>
    </div>
  );

}
}

export default PlayerStats;
