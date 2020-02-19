import React from "react";
import { connect } from 'react-redux';
 import { updateSearchForm } from '../actions/searchForm';
import { fetchWeather } from '../actions/weather';
 

const SearchBar = ({ searchFormData, updateSearchForm, fetchWeather }) => {

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
    }

     
        return (

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="ui input">
                        <input placeholder="Austin, San Francisco, Tokyo" 
                            value={searchFormData.city} 
                            name="city" 
                            type="text" 
                            onChange={handleInputChange}/>
                        <button className="button button-login" type="submit" value="Search" >  Submit</button>
                    </div>
                </form>

            </div>

        )
    }

const mapStateToProps = state => {
    return {
                searchFormData: state.searchFormData
            }
    }


    export default connect(mapStateToProps, { updateSearchForm, fetchWeather } )(SearchBar)