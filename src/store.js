import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
  
import weatherReducer from './reducers/weatherReducer';
import searchFormReducer from './reducers/searchFormReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    weatherData: weatherReducer,
    searchFormData: searchFormReducer
});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store