import React, { Component } from "react";
import API from "../../utils/API"
import "./resultCard.css"

class ResultCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        _id: props._id,
        proj_id: props.id,
        audio: props.audio
      }

      this.deleteAudio = this.deleteAudio.bind(this);

    }
   

    deleteAudio() {
      console.log(this.state._id)
      API.deleteFile(this.state._id).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      })

    }


    render() {
        const recArr = this.state.recordings

      return (
        
        <div className="audio-file">
            {/* WORKING */}
           <audio id="player" src={this.state.audio} ref="Progress1" video controls="controls" type="audio/webm"></audio>
           <button className="delete-button" onClick = {this.deleteAudio} id = {this.state._id}>Delete</button>
        </div>
      );
    }
  }
  
export default ResultCard;

