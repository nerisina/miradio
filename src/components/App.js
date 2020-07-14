import React from "react";
import FeaturedMix from "../components/FeaturedMix/FeaturedMix";
import Header from "./Header";
import 'tachyons'

function App() {
  const style = {
    fontSize: "10px",
    color: "#cccccc",
    lineBreak: "anywhere",
    wordBreak: "normal",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
    fontWeight: "100"
  }
  return (
    <div className="App">
      <div>
        {/** Featured Mix */}
        <FeaturedMix />
        <div>
          {/** Header */}
          <Header />
          {/** Router page */}
        </div>
      </div>
      {/** Audio player */}
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        title="Song Playing"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13553256&color=%23fc4545&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div style={style}>
        <a
          href="https://soundcloud.com/nacey"
          title="nacey"
          target="_blank"
          // style="color: #cccccc; text-decoration: none;"
        >
          nacey
        </a>
        ·
        <a
          href="https://soundcloud.com/nacey/la-roux-bulletproof-nacey"
          title="La Roux - Bulletproof (Nacey Remix)"
          rel="noopener noreferrer"
          target="_blank"
          style={{color: "#cccccc", textDecoration: "none"}}
        >
          La Roux - Bulletproof (Nacey Remix)
        </a>
      </div>
    </div>
  );
}

export default App;
