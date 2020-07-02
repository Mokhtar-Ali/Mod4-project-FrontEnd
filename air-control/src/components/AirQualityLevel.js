import React from "react";
import "../Css/MainContainer.css";

class AirQualityLevel extends React.Component {

  state = { oyxgen: 0, carbon_dioxide: 0}

calculateOxygen = () => {
  let oxygenNum = 0
  this.props.trees.forEach(tree => {
    oxygenNum += tree.oxygen
  })
  return oxygenNum
}

calculateCo2 = () => {
  let co2 = 30
  this.props.trees.forEach(tree => {
    co2 += tree.carbon_dioxide
  })
  return co2
}
  
  render() {
   
      return (
        
        <div className="air-quality-level">
          <h6>Air Quality Monitor</h6>
          <p>
            O₂: {this.calculateOxygen()}
          </p>
          <p>
            CO₂: {this.calculateCo2()}
          </p>
        </div>
      );
    
  }
  }

export default AirQualityLevel;