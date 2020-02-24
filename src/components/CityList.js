import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weather';
import { removeCityFromList } from '../actions/cityList'
import '../index.css'
 


class CityList extends Component {
 
  
  
    render() {

        let { cityList, fetchWeather, removeCityFromList } = this.props
         
        let list = cityList.cities.map((city, i)  => {
          let keyCity = `city-${i}`;
          let keyRemoveCity = `remove-city-${i}`;
          let keyCityList = `cityList=${i}`

             return(
                 <div className="cityList" key={keyCityList}>
                 <div className=" ui buttons" key={i}>
                    <button className="blue ui inverted button" key={keyCity} onClick={dispatch => fetchWeather(city) } >{ city } </button>
                    <div className="or"></div>
                    <button className="ui red inverted delete button" key={keyRemoveCity} onClick={dispatch => removeCityFromList(city)}>Delete</button>
                </div>
                </div>

             )
        })
         
   

  
        
      return (
        <div className="CityList">
            <div className="small ui vertical buttons">
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