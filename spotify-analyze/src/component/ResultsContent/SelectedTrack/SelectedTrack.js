import React from 'react';

import './SelectedTrack.css'
import RadarGraph from './RadarGraph/RadarGraph';

const selectedTrack = props=>(
    <div className = "SelectedTrack">
       <RadarGraph/>
    </div>
);

export default selectedTrack;