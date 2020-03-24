import React from 'react'
import "../Css/MainContainer.css"

class PlayerStats extends React.Component {

  state = {
    treesNum: this.props.trees.length
  }

  increaseTrees = () => {
    this.setState({treesNum: this.state.treesNum + 1})
  }

render() {
  return (
    <div className="player-stats">
      <p>Player: {this.props.user.name}</p>
      <p>Trees Planted: {this.props.treesNum} </p>
      <p>Trees Cut: </p>
    </div>
  );

}
}

export default PlayerStats;
