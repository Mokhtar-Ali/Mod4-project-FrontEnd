import React from 'react'
import "../Css/MainContainer.css"

class Weather extends React.Component {

    state = { weather: "", temperature: 0 }

componentDidMount() {
    this.displayWeather()
}
    displayWeather = () => {
        const weather = ["sunny", "rainy", "cloudy", "snowy"]
        const randomCondition = weather[Math.floor(Math.random()*weather.length)];
        this.setState({ weather: randomCondition})
    }

    // randomTemp = () => {
    //     const min = 20;
    //     const max = 99;
    //     const temperature = min + Math.random() * (max - min);
    //     this.setState({ temperature: this.state.temperature + temperature });
    // }

    //use switchs statement for different weather conditions 

    render(){
        // console.log(this.randomTemp)
        console.log(this.state.weather)
        console.log(this.displayWeather)
        return (
          <div className="weather">
              <h6>Current conditions:</h6>
        <p>Weather: {this.state.weather}</p>
        <p>Temperature (F): {this.state.temperature}</p>
          </div>
        );
    }
}

export default Weather;
