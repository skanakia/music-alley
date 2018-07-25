import "./main.css";
import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import API from '../../utils/API'

class main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        record: false,
        userid: 1,
        id: 1,
        blob: props.blob,
        length: 10
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
      // const userid = this.state.userid;
      // const id = this.state.id;
      API.createAudioFile(1, 1, recordedBlob);
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