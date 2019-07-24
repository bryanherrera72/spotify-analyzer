import React from 'react';
import './SearchResult.css';

const searchResult = props => {
    
    return (
        <div className = "SearchResult">
            <div className = "ImgBox">
                <img className = "SongImg" src={props.albumImg} />
            </div>   
            <div className = "InfoBox">
                <p onClick = {()=>props.clicked(props.id)} className = "SongTitle">{props.title}</p>
                <p className = "SongArtist">{props.artist}</p>
                <p className = "SongAlbum">{props.album}</p>
            </div>
        </div>
    );
}

export default searchResult;