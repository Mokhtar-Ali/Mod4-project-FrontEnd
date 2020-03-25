import React from "react";
import PlayerStats from "../components/PlayerStats";
import Weather from "../components/Weather";
import AirQualityLevel from "../components/AirQualityLevel";
import "../Css/MainContainer.css";
import Tools from "../components/Tools";

class StatsContainer extends React.Component {
  state = { oxygen: 0, carbon_dioxide: 0 };

  componentDidMount() {
    // setState({oxygen: this.props.atmosphere.oxygen, carbon_dioxide: this.props.atmosphere.carbon_dioxide})
    // this.updateCO2();
    // this.updateOxygen();
  }

  updateOxygen = () => {
    this.setState(previousState => {
      return {
        oxygen: previousState.oxygen + 3, carbon_dioxide: previousState.carbon_dioxide - 2
      };
    });
  };

  updateCO2 = () => {
    this.setState(previousState => {
      return {
        carbon_dioxide: previousState.carbon_dioxide + 2, oxygen: previousState.oxygen - 5
      };
    });
  };

  render() {
    // console.log(this.props.atmosphere, "atmosphere?")
    const { user, treesNum, cutTree, plantTree, trees, waterTree, atmosphere} =this.props;
    return (
      <div className="stats-container">
        <PlayerStats
          user={user}
          plantedTrees={this.props.plantedTrees} 
          choppedTrees={this.props.choppedTrees}
        />
        <Weather />
        <AirQualityLevel
          oxygen={this.state.oxygen}
          carbon_dioxide={this.state.carbon_dioxide}
          updateOxygen={this.updateOxygen}
          updateCO2={this.updateCO2}
          trees={trees}
          atmosphere={this.props.atmosphere}
          
          
        />
        <Tools
          plantTree={plantTree}
          cutTree={cutTree}
          waterTree={waterTree}
        />
      </div>
    );
  }
}

export default StatsContainer;
