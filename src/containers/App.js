import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from "../actions/weather";
import Header from '../components/Header';
import Weather from '../components/Weather';
import CityList from '../components/CityList';

import './App.css';
import SearchBar from '../components/SearchBar';
import { Divider } from 'semantic-ui-react'
 
class App extends Component {

  componentDidMount() {
    this.props.fetchWeather("Austin")
  }



  render() {

    const { weatherData } = this.props;
    console.log(weatherData.data.name)
     
    return (
      <div className="App">
        <Header text={"React Redux Weather"} />
        <Divider hidden />

        <SearchBar />
        <Divider />
       
            <Weather data={weatherData.data}/>
             
            <CityList />
            
 
       

    

 
    
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