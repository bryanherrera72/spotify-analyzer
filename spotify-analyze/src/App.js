import React, {Component} from 'react';
import axiosAuth from './http/axiosAuth';
import spotify from './http/axiosSpotify';
import './App.css';
import Aux from './hoc/Aux';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import ResultsContent from './component/ResultsContent/ResultsContent';

class App extends Component {
  state = {
    searchValue: "",
    searchResults: [],
    selectedTrack: null
  }
  
  selectTrack = (trackId) => {
    let id = trackId
    spotify.get(`audio-features/${id}`)
      .then(
          response=>{
            // console.log(response);
            let track = {...response.data};
            this.setState({selectedTrack: track});
          }
      )
      .catch(
        err=>{
          console.log(err);
        }
      );
  }

  searchApi = (searchTerm)=>{
    this.setState({selectedTrack: null});
    spotify.get('search', {params: {q: searchTerm, type: 'track'}}).then(
      response=>{
        let tracks = [...response.data.tracks.items]
        
        this.setState({
          searchResults: tracks
        });
      }
    ).catch(
      err=>{

      }
    );
  }

  

  componentDidMount(){
    axiosAuth.post('/token/accesstoken')
      .then(
        response =>{
          // console.log(response);
          spotify.interceptors.request.use(
            config => {
              // console.log("interceptor body");
              // console.log(config);
              const access_token = response.data.access_token;
              if(access_token != null)
                config.headers.Authorization = `Bearer ${access_token}`;
              return config;
            },
            err =>{
              return Promise.reject(err);
            }
          );
        })
      .catch(
        err => console.log(err)
      );
  }
  
  render(){
    return (
      <Aux>
          <HomeContainer 
            search = {this.searchApi}>
            <ResultsContent 
              selectedTrack = {this.state.selectedTrack}
              songClicked = {this.selectTrack}
              results = {this.state.searchResults} />
          </HomeContainer>
      </Aux>
    );
}
}

export default App;
