/* global Mixcloud */

import React, { Component } from "react";
import FeaturedMix from "../components/FeaturedMix/FeaturedMix";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
const About = () => <h2>About</h2>;
const Archive = () => <h2>Archive</h2>;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      playing: false,
      currentMix: ''
    }
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
    })
}

  componentDidMount(){
    this.mountAudio()
  }

  togglePlay = () => {
    console.log('hi')
    this.widget.togglePlay();
  }  

  playMix = mixName => {
    this.setState({
      currentMix: mixName
    })
    this.widget.load(mixName, true)
  }

  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix />
            <div className="w-50-1 relative z-1">
              <Header />
              <div>
                <button onClick={this.togglePlay}>{this.state.playing ? 'Playing' : 'Pause' }</button>
              </div>
              <h1>Currently playing {this.state.currentMix} </h1>
              <div>
                <button onClick={() => this.playMix('/djsesion/reggaeton-2018-reggaeton-mix-2018-lo-mas-nuevo-ozuna-bad-bunny-maluma-j-balvin-becky-g/')}>Play Mix</button>
                <button onClick={() => this.playMix('/djsesion/reggaeton-mix-diciembre-2017-lo-mas-nuevo-j-balvin-becky-g-bad-bunny-luis-fonsi-demi-lovato/')}>Play REGGETON minx</button>
              </div>
            </div>
          <Route path="/" component={Home} />
          <Route path="/archive" component={Archive} />
          <Route path="/about" component={About} />
          </div>
        </div>
        { /** Audio player */}
          <iframe 
            className="player db fixed bottom-0"
            scrolling="no" 
            ref={ player => this.player =player}
            title='Playing Mix'
            frameBorder="0"
            width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fdjnobreakfast%2Fdj-no-breakfast-stoned-thursday-vol3%2F"></iframe>
      </Router>
    );
  }
}

export default App;
