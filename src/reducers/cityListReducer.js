import { ADD_CITY_TO_LIST } from '../actions/cityList';


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
     

        default:
            return state
    }
}

