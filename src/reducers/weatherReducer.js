
import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL, FETCH_WEATHER_START } from '../actions/weather'

const initialState = {
    data: [],
    isLoading: false,
    errorMessage: ""
}
    



export default (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_WEATHER_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                errorMessage: ""
            }


        case FETCH_WEATHER_FAIL:  
            return {
                ...state,
                isLoading: false,
                errorMessage: "Error fetching weather"
            }
        
        case FETCH_WEATHER_START:  
            return {
                ...state,
                isLoading: true,
            }

            
        default:
            return state
    }
}