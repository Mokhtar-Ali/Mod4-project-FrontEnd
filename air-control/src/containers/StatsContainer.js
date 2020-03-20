import React from 'react';
import PlayerStats from '../components/PlayerStats'
import Weather from '../components/Weather'
import AirQualityLevel from '../components/AirQualityLevel'

function StatsContainer() {
  return (
    <div className="stats-container">
        <PlayerStats />
        <Weather />
        <AirQualityLevel />
    </div>
  )
}

export default StatsContainer;
