import React from "react";
import PlayerStats from "../components/PlayerStats";
import Weather from "../components/Weather";
import AirQualityLevel from "../components/AirQualityLevel";
import "../Css/MainContainer.css";
import Tools from "../components/Tools";

class StatsContainer extends React.Component {
  state = { oxygen: 30, carbon_dioxide: 25 };

  componentDidMount() {
    this.updateCO2();
    this.updateOxygen();
  }

  // displayAtmosphere = () => {
  //   // const oxygen = this.state.oxygen;
  //   // const carbon_dioxide = this.state.carbon_dioxide;
  //   if (this.props.cutTree) {
  //     this.setState(previousState => {
  //       return {
  //         carbon_dioxide: previousState.carbon_dioxide + 2
  //       };
  //     });
  //   } else {
  //     this.setState(previousState => {
  //       return {
  //         oxygen: previousState.oxygen + 3
  //       };
  //     });
  //   }
  // };

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
    const { user, treesNum, cutTree, plantTree, trees } = this.props;
    return (
      <div className="stats-container">
        <PlayerStats
          user={user}
          treesNum={treesNum}
          cutTree={cutTree}
          plantTree={plantTree}
          trees={trees}
        />
        <Weather />
        <AirQualityLevel
          oxygen={this.state.oxygen}
          carbon_dioxide={this.state.carbon_dioxide}
          plantTree={plantTree}
          cutTree={cutTree}
          updateOxygen={this.updateOxygen}
          updateCO2={this.updateCO2}
          
        />
        <Tools
          plantTree={plantTree}
          cutTree={cutTree}
          updateOxygen={this.updateOxygen}
          updateCO2={this.updateCO2}
        />
      </div>
    );
  }
}

export default StatsContainer;
