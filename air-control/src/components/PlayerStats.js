import React from 'react'
import "../Css/MainContainer.css"

function PlayerStats(props) {
  return (
    <div className="player-stats">
      <p>{props.user.name}</p>
    </div>
  );
}

export default PlayerStats;
