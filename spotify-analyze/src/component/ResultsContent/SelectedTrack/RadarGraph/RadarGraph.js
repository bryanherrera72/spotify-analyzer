import React from 'react';
import Chart from 'chart.js';
const radarGraph = props =>{
    let radarGraph = React.createRef();
    return (
        <div className="RadarGraph">
            <canvas ref= {radarGraph} width = {200} height = {200}></canvas>
        </div>
    );
}

export default radarGraph;