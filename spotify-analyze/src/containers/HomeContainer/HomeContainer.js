import React from 'react';
import './HomeContainer.css';
import '../../component/TopSearch/TopSearch';
import TopSearch from '../../component/TopSearch/TopSearch';

const homeContainer = props =>(
        <div className = "HomeContainer">
            <TopSearch search= {props.search}/>
            <main className = "ContentContainer">
                <div className = "Content">
                    {props.children}
                </div>
            </main>
        </div>
);
export default homeContainer;