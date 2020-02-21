import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weather';
import { removeCityFromList } from '../actions/cityList'
import '../index.css'


class CityList extends Component {
 
  
  
    render() {

        let { cityList, fetchWeather, removeCityFromList } = this.props
         
        let list = cityList.cities.map((city, i)  => {
             return(
                <div className="ui buttons" key={i}>
                    <button className="small blue ui inverted button" onClick={dispatch => fetchWeather(city) } >{ city } </button>
                    <div className="or"></div>
                    <button className="small ui red inverted delete button" onClick={dispatch => removeCityFromList(city)}>Delete</button>
             
                </div>)
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
  
  export default connect(mapStateToProps, { fetchWeather, removeCityFromList } )(CityList);