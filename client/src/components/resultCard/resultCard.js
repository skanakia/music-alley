import React, { Component } from "react";

class ResultCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: props.id,
        audio: props.audio
      }
    }
   
    render() {
        const recArr = this.state.recordings

      return (
        
        <div className="audio-file">
            {/* WORKING */}
           <audio id="player" src={this.state.audio} ref="Progress1" video controls="controls" type="video/webm"></audio>
        </div>
      );
    }
  }
  
export default ResultCard;

