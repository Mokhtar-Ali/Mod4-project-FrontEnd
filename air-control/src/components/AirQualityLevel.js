import React from "react";
import "../Css/MainContainer.css";

class AirQualityLevel extends React.Component {

  state = { 
    // atmosphere: null
  }

  // componentDidMount() {
  //   this.setState({atmosphere: {...this.props.atmosphere}})
  // }

  
  render() {
    if (this.props.atmosphere){console.log(this.props.atmosphere.oxygen)}
      return (
        
        <div className="air-quality-level">
          <h6>Air Quality Monitor</h6>
          <p>
            O₂: {this.props.atmosphere? this.props.atmosphere.oxygen : 0} 
          </p>
          <p>
            {/* CO₂: {props.atmosphere.carbon_dioxide} */}
          </p>
        </div>
      );
    
  }
  }

export default AirQualityLevel;
