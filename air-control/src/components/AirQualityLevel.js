import React from "react";
import "../Css/MainContainer.css";

function AirQualityLevel(props) {

    return (
      <div className="air-quality-level">
        <h6>Air Quality Monitor</h6>
        <p>
          O₂: {props.oxygen} {props.displayAtmosphere}
        </p>
        <p>
          CO₂: {props.carbon_dioxide} {props.displayAtmosphere}
        </p>
      </div>
    );
  }

export default AirQualityLevel;
