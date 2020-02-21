import { ADD_CITY_TO_LIST, REMOVE_CITY_FROM_LIST } from '../actions/cityList';


const initialState = {
    cities: []
}



export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY_TO_LIST: 
         return {
            ...state,
            cities: [...state.cities, action.city]        
        }
     
        case REMOVE_CITY_FROM_LIST: 
            let newCities = [...state.cities]
            console.log(newCities)
            let index = newCities.indexOf(action.city)
            newCities.splice(index, 1)
              
            return {
                ...state,
                cities: newCities
            }
         

        default:
            return state
    }
}

