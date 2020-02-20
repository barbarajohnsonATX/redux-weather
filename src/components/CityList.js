import React, { Component } from "react";
import { connect } from 'react-redux';


class CityList extends Component {
 
  
  
    render() {

        let { cityList } = this.props
         
        let list = cityList.cities.map((city, i)  => {
            return(<div key={i}><strong>{ city }</strong></div>)
        })
         
  
        
      return (
        <div className="CityList">
            { list }
          
        </div>
      );
    }
  
  }
  
  
  const mapStateToProps = (state) => {
    return ({
     cityList: state.cityList,
      })
  }
  
  export default connect(mapStateToProps )(CityList);