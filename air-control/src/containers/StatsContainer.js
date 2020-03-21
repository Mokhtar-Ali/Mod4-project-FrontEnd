import React from 'react';
import PlayerStats from '../components/PlayerStats'
import Weather from '../components/Weather'
import AirQualityLevel from '../components/AirQualityLevel'
import "../Css/MainContainer.css"


function StatsContainer() {
  return (
    <div className="stats-container">
      <h1>Stats</h1>
        <PlayerStats />
        <Weather />
        <AirQualityLevel />
    </div>
  )
}

export default StatsContainer;
