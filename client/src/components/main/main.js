import "./main.css";
import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import API from '../../utils/API';
import {Howl, Howler} from 'howler';

let userid;
let id;

class main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        record: false,
        userid: 1,
        id: 1,
        blobURL: props.blobURL
      }
   
      userid = this.state.userid;
      id = this.state.id;
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
      API.createAudioFile(userid, id, recordedBlob);
      const sound = new Howl({
        src: [recordedBlob.blobURL],
        format: ['webm']
        }); 
  
        sound.play();
    }

   
    render() {
      return (
        <div>
        <p className="main">
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            strokeColor="#000000"
            backgroundColor="#FF4081"/>
            <button onClick={this.startRecording} type="button">Start</button>
            <button onClick={this.stopRecording} type="button">Stop</button>
        </p>
        </div>
      );
    }
  }
export default main;