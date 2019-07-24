import React, {Component} from 'react';
import './TopSearch.css';
import SearchBar from './SearchBar/SearchBar';

class TopSearch extends Component {
    state = {
        scrollTop: true,
        searchItem: ""
    }
    changedHandler = (event) =>{
        this.setState({
            searchItem: event.target.value
        });
    }
    search = (event)=>{
      event.preventDefault();
      this.props.search(this.state.searchItem);
    }

    // code involving the scroll animations
    scrollTopHandler = (val)=>{
        this.setState({
          scrollTop: val
        });
    }
    scrollEventHandler = ()=>{
        if(window.scrollY <= 200 && this.scrollTop !== true){
            
            this.scrollTopHandler(true);
        }
        else{
            if(this.state.scrollTop!== false ){
                this.scrollTopHandler(false);
            }
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.scrollEventHandler);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollEventHandler);
    }
    
    render(){
        return (
            <div className = "TopSearch">
                <div className = {this.state.scrollTop? "Oval":"Oval scrollingOval"}>
                    <div className = "InnerOval">
                       <SearchBar 
                        changed = {this.changedHandler}
                        search = {this.search} 
                        value = {this.state.searchItem}
                        scrollTop = {this.state.scrollTop}/> 
                    </div>
                </div>
            </div>
        );
    }
}

export default TopSearch;