import React, {Component} from 'react';
import logoGoat from './img/goat.png';
import logoMonkey from './img/monkey.png';
import logoCat from './img/cat.png';
import './App.css';

import {getAlbum, getTotalTracks} from './scripts/general_methods';
import fileDownload from 'react-file-download';
import randomstring from 'randomstring';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theFile: undefined,
            totalTracks: 0,
            message: ''
        };
    }

    getAlbumMe() {
      this.setState(
        {
          message: 'Wait For Download'
        }
      );

        getAlbum((response) => {
                this.setState(
                  {
                    theFile: response === false ? 'no' : response,
                    message: response === false ? 'Server Not Alive' : ''
                  }
                );
                fileDownload(this.state.theFile, randomstring.generate() + '.zip');
            }
        );
    }

    getTotalTracksMe() {
        getTotalTracks((response) => {
                this.setState({totalTracks: response === false ? 'server not alive' : response.totalTracks});
            }
        );
    }

    componentDidMount() {
        this.getTotalTracksMe();
    }

    render() {

        const logos = [logoCat, logoGoat, logoMonkey];

        return (
            <div className="App">
                <div className="app-text">
                    <h1>Get a Random Beat Tape</h1>
                    <h3>7 tracks how of {this.state.totalTracks} total</h3>
                </div>
                <h1>{this.state.message}</h1>
                <a className="App-logo-container" href="#nothing" onClick={() => {
                    this.getAlbumMe()
                }}>
                    <img src={logos[(Math.floor(Math.random() * logos.length - 1) + 1)]} className="App-logo"
                         alt="logo"/>
                </a>
                <div>
                </div>
            </div>
        );
    }
}

export default App;
