 
export const ADD_CITY_TO_LIST = 'ADD_CITY_TO_LIST';
  


 

export const addCityToList = (city) => {
    return {
        type: ADD_CITY_TO_LIST,
        city
    }
}
 