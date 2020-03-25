import React from "react";
import "../Css/MainContainer.css";

function AirQualityLevel(props) {

    return (
      <div className="air-quality-level">
        <h6>Air Quality Monitor</h6>
        <p>
          O₂: {props.oxygen} 
        </p>
        <p>
          CO₂: {props.carbon_dioxide}
        </p>
      </div>
    );
  }

export default AirQualityLevel;
