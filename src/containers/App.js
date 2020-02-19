import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from "../actions/weather";
import Header from '../components/Header';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchWeather("Austin")
  }



  render() {

    const { weatherData } = this.props;
    console.log(weatherData.data.name)
     
    return (
      <div className="App">
        <Header text={"React Redux Weather"}></Header>

        <h2>{weatherData.data.name ? weatherData.data.name : "" }</h2>
        <h3>Visibility: {weatherData.data.visibility ? weatherData.data.visibility : ""}</h3>
        <h3>Timezone: {weatherData.data.timezone ? weatherData.data.timezone : ""}</h3>
        <h3>Temp: {weatherData.data.main ? weatherData.data.main.temp : ""}</h3>
        <h3>Main: {weatherData.data.weather ? weatherData.data.weather[0].description : ""}</h3>
        <h3>Rain 1 hr: {weatherData.data.rain ? weatherData.data.rain['1h'] : ""}</h3>

 
    
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return ({
    weatherData: state.weatherData,
    })
}

export default connect(mapStateToProps, { fetchWeather })(App);