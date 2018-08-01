// import React from "react";

import React, { Component } from "react";
import "./sidebar.css";
import API from "../../utils/API";
import Main from "../main"
import Audio from '../audio';

const divStyle = {
    listStyleType: "none"
}

class sidebar extends Component {
    constructor(props) {
        super(props);
    this.state = {
        src: ["http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3"
        ]};
    }

render() {
    const x = this.state.src;
    return (
<div className="sidebar">

    <h1 id="playlist">&nbsp;Playlist</h1>
        <ul style={divStyle}>
        {/* {x ? 
            this.state.src.map(src => (
            <li>
            <Audio
            key={src}
            src={src} />
            </li>
            ))
             : (
                <h3>No Results to Display</h3>
              )} */}
        </ul>
            
    </div>
   );
  }
}



export default sidebar;