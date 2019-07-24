import React from 'react';
import "./ResultsContent.css";
import SearchResults from './SearchResults/SearchResults';
import SelectedTrack from './SelectedTrack/SelectedTrack';
const resultsContent = props =>{
    let display = (<div><h2>Search a Song.</h2></div>);

    if(props.results.length !== 0){
        display = (<SearchResults results = {props.results} clicked = {props.songClicked}/>);
    }
    if(props.selectedTrack !== null){
        display = (<SelectedTrack track = {props.selectedTrack}/>);
    }
    return (
        <div className = "ResultsContent">
           {display}
        </div>
    );
}

export default resultsContent;