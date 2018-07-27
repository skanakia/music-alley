import "./audio.css";
import React, { Component } from 'react';
import Main from "../main";
import Sidebar from "../sidebar";

class audio extends Component {
    constructor(props) {
        super(props);
    this.state = {
        src: this.props.src,
      };
    }
      render() {
        return (
            // {this.state.map(src => (
    <audio id="player" src = {this.state.src} video controls="controls" type="video/webm"></audio>
            // ))}
        )
    }
}


export default audio;