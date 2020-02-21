 
export const ADD_CITY_TO_LIST = 'ADD_CITY_TO_LIST';
export const REMOVE_CITY_FROM_LIST = 'REMOVE_CITY_FROM_LIST';



 

export const addCityToList = (city) => {
    return {
        type: ADD_CITY_TO_LIST,
        city
    }
}


export const removeCityFromList = (city) => {
    return {
        type: REMOVE_CITY_FROM_LIST,
        city
    }
}