import React from "react";
import moment from 'moment';
 

const Weather = (props) => {

    let k_to_f = (k) => Math.floor(k * 9/5 - 459.67)
    let mPerSeconds_to_milesPerHour = (mps) =>  Math.floor(mps * 2.23694)
    let time = (utc) => moment.unix(utc).format("h:mm A")
    let timeStamp = moment().format('dddd h:mm A')
    let iconURLBase = "http://openweathermap.org/img/w/";
    let iconWeatherDescriptionURL = ""
    if (props.data.weather) {
        iconWeatherDescriptionURL = `${iconURLBase}${props.data.weather[0].icon}.png`
    }


    let windSpeedIcon = () => {
           return <img src="https://img.icons8.com/ios-filled/24/000000/wind.png"alt="wind speed icon" /> 
    }

    let humidityIcon = () => {
        return <img src="https://img.icons8.com/ios/24/000000/humidity.png" alt="humidity icon" /> 
    }

    let sunriseIcon = () => {
        return  <img src="https://img.icons8.com/material-outlined/24/000000/sunrise.png" alt="sunrise icon" /> 
     }

     let sunsetIcon = () => {
        return  <img src="https://img.icons8.com/material-outlined/24/000000/sunset.png" alt="sunset icon" /> 
     }

    
    

    return (
        <div className="weatherInfo">
            <h4> 
                <i className="clock outline icon"></i> 
                &nbsp;&nbsp;&nbsp;
                { timeStamp } 
            </h4>

            <h2> 
                <i className="map marker alternate icon"></i> 
                &nbsp;&nbsp;&nbsp;
                { props.data.name} 
            </h2>

 
            <h2> 
                 <img src={iconWeatherDescriptionURL} alt="weather icon" /> 
                 &nbsp;&nbsp;&nbsp;
                 { props.data.weather ? props.data.weather[0].description : "" } 
            </h2>

            <h2> 
                <i className="thermometer icon" />
                &nbsp;&nbsp;&nbsp;
                { props.data.main ? `${k_to_f(props.data.main.temp)} °F` : "" } 
            </h2>
            
            <h2> 
                {windSpeedIcon()}
                &nbsp;&nbsp;&nbsp;
                { props.data.main ? `${mPerSeconds_to_milesPerHour(props.data.wind.speed)} mph` : "" } 
            </h2>

            <h2> 
                {humidityIcon()}
                &nbsp;&nbsp;&nbsp;

                { props.data.main ? `${props.data.main.humidity} %` : "" }
            </h2>

            <h2> 
                {sunriseIcon()}
                &nbsp;&nbsp;&nbsp;
                { props.data.sys ? time(props.data.sys.sunrise) : "" }
                &nbsp;&nbsp;&nbsp;&nbsp;

               {sunsetIcon()}
               &nbsp;&nbsp;&nbsp;
               { props.data.sys ? time(props.data.sys.sunset) : "" } 
           </h2>

        </div>
    )
}

export default Weather
