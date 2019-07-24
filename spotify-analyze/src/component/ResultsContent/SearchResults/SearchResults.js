import React from 'react';

import './SearchResults.css'

import SearchResult from './SearchResult/SearchResult';

const searchResults = (props)=>{
    let results = props.results.map(
        (track)=>{
            return (
                <SearchResult 
                    key = {track.id}
                    id = {track.id}
                    title = {track.name}
                    artist = {track.artists[0].name} 
                    album = {track.album.name}
                    albumImg = {track.album.images[2].url}
                    clicked = {props.clicked}/>
            );
        }
    );
    return (
        <div className = "SearchResults">
            {results}
        </div>
    );
}

export default searchResults;