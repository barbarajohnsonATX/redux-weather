import React from "react";
import { connect } from 'react-redux';
import { updateSearchForm, clearSearchForm } from '../actions/searchForm';
import { fetchWeather } from '../actions/weather';
 


const SearchBar = ({ searchFormData, updateSearchForm, fetchWeather, clearSearchForm }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        
        const updatedSearchFormInfo = {
            ...searchFormData,
             [name]: value
        }
 
        updateSearchForm(updatedSearchFormInfo)
    
     }


    const handleSubmit = event => {
        event.preventDefault()
        fetchWeather(searchFormData.city)
        clearSearchForm() 

    }

     
        return (

            <div>
                
                <form onSubmit={handleSubmit}>
                    <div className="ui input">
                        <input placeholder="ex: Austin, San Francisco" 
                            value={searchFormData.city} 
                            name="city" 
                            type="text" 
                            onChange={handleInputChange}/>
                      </div>
                    
                     <div><button className="ui button" type="submit" >Get Weather</button></div> 

                </form>

            </div>

        )
    }

const mapStateToProps = state => {
    return {
                searchFormData: state.searchFormData
            }
    }


    export default connect(mapStateToProps, { updateSearchForm, fetchWeather, clearSearchForm } )(SearchBar)