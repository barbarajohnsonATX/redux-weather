import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from "../actions/weather";
import { addCityToList } from "../actions/cityList";
import Header from '../components/Header';
import Weather from '../components/Weather';
import CityList from '../components/CityList';

import './App.css';
import SearchBar from '../components/SearchBar';
import { Divider } from 'semantic-ui-react'
import Location from '../components/Location';
  
 
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
        <Location />

        <div className="container">
           <CityList />
          < Weather data={weatherData.data}/>
           
   
          

        </div>


        
    
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return ({
    weatherData: state.weatherData,
    })
}

export default connect(mapStateToProps, { fetchWeather, addCityToList })(App);