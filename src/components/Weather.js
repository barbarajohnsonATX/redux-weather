import React from "react";
import moment from 'moment';
 

const Weather = (props) => {

    let k_to_f = (k) => Math.floor(k * 9/5 - 459.67)
    let mPerSeconds_to_milesPerHour = (mps) =>  Math.floor(mps * 2.23694)
    let time = (utc) => moment.unix(utc).format("h:mm A")
    let current = moment().format('dddd MMMM DD, YYYY, h:mm:ss A')

                 
    
    return (
        <div className="weatherInfo">
             <h4> { current } </h4>
            <h2> { props.data.name} </h2>            
            <h2> { props.data.main ? `${k_to_f(props.data.main.temp)} °F` : "" } </h2>
            <h2> { props.data.weather ? props.data.weather[0].description : "" } </h2>
            <h4> Wind: { props.data.main ? `${mPerSeconds_to_milesPerHour(props.data.wind.speed)} mph` : "" } </h4>
            <h4> Humidity: { props.data.main ? `${props.data.main.humidity} %` : "" }</h4>
            <h4> Sunrise: { props.data.sys ? time(props.data.sys.sunrise) : "" } </h4>
            <h4> Sunset: { props.data.sys ? time(props.data.sys.sunset) : "" } </h4>
            {/* <h4> Lat: { props.data.coord.lat ? props.data.coord.lat : "" } </h4>
            <h4> Lon: { props.data.coord.lon ? props.data.coord.lon : "" } </h4> */}

        </div>
    )
}

export default Weather
