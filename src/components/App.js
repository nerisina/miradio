/* global Mixcloud */

import React, { Component } from "react";
import FeaturedMix from "../components/FeaturedMix/FeaturedMix";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Home.js';
import mixesData from '../data/mixes'
import Archive from './Archive'
const About = () => <h2>About</h2>;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      playing: false,
      currentMix: '',
      mix: null,
      mixIds: mixesData,
      mixes: []
    }
  }

  fetchMixes = async () => {
    const {mixIds} = this.state;
    console.log(mixIds)
    mixIds.map(async id => {
      try{
        const response = await fetch(`https://api.mixcloud.com/${id}`);
        const data = await response.json();
        this.setState((prevState, props) => ({  
          mixes: [...prevState.mixes, data]
        }))
      }catch(error){ }
    })
    
  }

  mountAudio = async ()=> {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    
    this.widget.events.pause.on(() => 
      this.setState({
        playing: false
      })
    );

    this.widget.events.play.on(() => {
      this.setState({
        playing: true
      })
    });
}

  componentDidMount(){
    this.mountAudio()
    this.fetchMixes();
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay();
    },
  
    playMix: mixName => {
      const {currentMix} = this.state;

      if(mixName === currentMix){
        return this.widget.togglePlay()
      }

      this.setState({
        currentMix: mixName
      })
      
      this.widget.load(mixName, true)
    }
  }
  
  render() {
    // if the array is empty we assign it a default value 
    // of an empty {} obj
    const [firstMix = {}] = this.state.mixes;  
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix 
              {...this.state} 
              {...this.actions} 
              {...firstMix} 
              id={firstMix.key} />
            <div className="w-50">
              <Header />
              <Route 
              exact 
              path="/" 
              component={() => <HomePage {...this.state} {...this.actions} />} />
              <Route path="/archive" component={() => <Archive {...this.state} {...this.actions} />} />
              <Route path="/about" component={About} />
              </div>
          </div>
        </div>
        { /** Audio player */}
          <iframe 
            className="player db fixed bottom-0"
            scrolling="no" 
            ref={ player => this.player = player}
            title='Playing Mix'
            frameBorder="0"
            width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fdjnobreakfast%2Fdj-no-breakfast-stoned-thursday-vol3%2F"></iframe>
      </Router>
    );
  }
}

export default App;