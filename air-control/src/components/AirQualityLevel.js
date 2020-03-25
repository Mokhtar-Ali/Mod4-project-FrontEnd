import React from "react";
import "../Css/MainContainer.css";

class AirQualityLevel extends React.Component {

  state = {
    atmosphere: null
  }

  componentDidMount() {
    this.setState({atmosphere: {...this.props.atmosphere}})
  }

  
  render() {
    // console.log(this.state.atmosphere)
      return (
        
        <div className="air-quality-level">
          <h6>Air Quality Monitor</h6>
          <p>
            {/* O₂: {props.atmosphere.oxygen}  */}
          </p>
          <p>
            {/* CO₂: {props.atmosphere.carbon_dioxide} */}
          </p>
        </div>
      );
    
  }
  }

export default AirQualityLevel;
