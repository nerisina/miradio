/* global Mixcloud */

import React, { Component } from "react";
import FeaturedMix from "../components/FeaturedMix/FeaturedMix";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Archive = () => <h2>Archive</h2>;

class App extends Component {
  mountAudio = async => {
    const widget = Mixcloud.PlayerWidget(this.player);
  };
  componentDidMount(){
    this.mountAudio()
  }
  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix />
            <div className="w-50-1 relative z-1">
              <Header />
            </div>
          </div>
          <iframe
            className="player db fixed bottom-0"
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fworldwidefm%2Fww-festival-s%C3%A8te-special-02-07-20%2F"
            frameBorder="0"
            ref={ player => this.player =player}
          ></iframe>
        </div>
        <Route path="/" component={Home} />
        <Route path="/archive" component={Archive} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
