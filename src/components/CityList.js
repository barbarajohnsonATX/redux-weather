import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weather';
import '../index.css'

class CityList extends Component {
 
  
  
    render() {

        let { cityList, fetchWeather } = this.props
         
        let list = cityList.cities.map((city, i)  => {
             return(<div key={i}><button className="small orange ui inverted button" onClick={dispatch => fetchWeather(city) } >{ city }</button></div>)

        })
         
  
        
      return (
        <div className="CityList">
            <div className="ui vertical buttons">
            { list }

            </div>
          
        </div>
      );
    }
  
  }
  
  
  const mapStateToProps = (state) => {
    return ({
     cityList: state.cityList,
      })
  }
  
  export default connect(mapStateToProps, { fetchWeather } )(CityList);