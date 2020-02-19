
import { clearSearchForm } from './searchForm';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';
export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';


// action creators 
 export const fetchWeatherSuccess = (data) => {
    return( { type: FETCH_WEATHER_SUCCESS, payload: data})
 }

 export const fetchWeatherFail= (error) => {
    return( { type: FETCH_WEATHER_FAIL, error})
 }

 export const fetchWeatherStart= () => {
    return( { type: FETCH_WEATHER_START })
 }

// async action creators 
export const fetchWeather = (city) => {

const API_KEY = 'd82dd428496894c8a11ee80a9dc34b35'
const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather';
 

    return dispatch => {
        dispatch(fetchWeatherStart());

        return (

            fetch(`${BASE_URL}?q=${city}&APPID=${API_KEY}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
        .then(r => r.json())
        .then(data => {
            console.log("data", data)
            dispatch( fetchWeatherSuccess(data))
            dispatch( clearSearchForm() )
             
        })
        

        //if Promise is rejected
        .catch(error => {
            console.log("error", error);
            dispatch( fetchWeatherFail(error))

             
        })
        )
    }
};