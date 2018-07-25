import "./main.css";
import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import Sidebar from "../sidebar"

class main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        record: false,
        recordedBlob: ""
      }
   
    }
   
    startRecording = () => {
      this.setState({
        record: true
      });
    }
   
    stopRecording = () => {
      this.setState({
        record: false
      });
    }
   
    onStop(recordedBlob) {
      console.log('recordedBlob is: ', recordedBlob);
      var x = document.getElementById("playback");
      x.src = recordedBlob.blobURL;
      x.type = "audio/webm";
      console.log(x);
    }
   
    render() {
      return (
        <p className="main">
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            strokeColor="#000000"
            backgroundColor="#FF4081"
            />
            <button className="startb" onClick={this.startRecording} type="button">Start Recording</button>
            <button className="stopb" onClick={this.stopRecording} type="button">Stop</button>
            <video controls name="media">
            <source id="playback"></source>
            </video>
          </p>
      );
    }
  }
export default main;