import React from 'react';
import PlayerStats from '../components/PlayerStats'
import Weather from '../components/Weather'
import AirQualityLevel from '../components/AirQualityLevel'
import "../Css/MainContainer.css"


function StatsContainer(props) {
  return (
    <div className="stats-container">
        <PlayerStats user={props.user}/>
        <Weather />
        <AirQualityLevel />
    </div>
  )
}

export default StatsContainer;
