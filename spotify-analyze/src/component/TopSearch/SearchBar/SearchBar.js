import React from 'react';
import Aux from '../../../hoc/Aux';
import './SearchBar.css';
const searchBar = props =>(
    <Aux>
        <div className = {props.scrollTop? "Title": "Title scrollingTitle"}><h1>Spotify Analyzer v1</h1></div>
        <div className = {props.scrollTop? "TrackSearchBox" : "TrackSearchBox scrollingTrackSearchBox"}>
            <form onSubmit = {props.search}>
                <label className = "SearchLabel" htmlFor="track_search" ><strong>Search a track: </strong></label>
                <input 
                    className = "TrackSearch" 
                    name = "track_search" 
                    onChange = {props.changed} 
                    value = {props.value}/>
                <button className = "SearchButton">Search</button>
            </form>
        </div>
        
    </Aux>
);

export default searchBar;