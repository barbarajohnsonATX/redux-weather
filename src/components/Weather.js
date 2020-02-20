import React from "react";


const Weather = (props) => {

    let k_to_f = (k) => Math.floor(k * 9/5 - 459.67)
    let m_to_miles = (m) => Math.floor(m * 0.000621371)
    let mPerSeconds_to_milesPerHour = (mps) =>  Math.floor(mps * 2.23694)
    



    return (
        <div>
            <h2>{props.data.name}</h2>
            <h4>Temperature: {props.data.main ? `${k_to_f(props.data.main.temp)} °F` : "" }</h4>
            <h4>Condition: {props.data.weather ? props.data.weather[0].description : ""}</h4>
            <h4>Wind: {props.data.main ? `${mPerSeconds_to_milesPerHour(props.data.wind.speed)} mph` : ""}</h4>
            <h4>Visibility: {props.data ? `${m_to_miles(props.data.visibility)} miles` : ""}</h4>
            <h4>Humidity: {props.data.main ? `${props.data.main.humidity} %` : ""}</h4>



        </div>
    )
}

export default Weather
