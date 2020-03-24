import React from 'react';
import PlayerStats from '../components/PlayerStats'
import Weather from '../components/Weather'
import AirQualityLevel from '../components/AirQualityLevel'
import "../Css/MainContainer.css"
import Tools from "../components/Tools"

function StatsContainer(props) {
  return (
    <div className="stats-container">
        <PlayerStats user={props.user} treesNum={props.treesNum} cutTree={props.cutTree} plantTree={props.plantTree} trees={props.trees}/>
        <Weather />
        <AirQualityLevel />
        <Tools plantTree={props.plantTree} cutTree={props.cutTree}/>
    </div>
  )
}

export default StatsContainer;
