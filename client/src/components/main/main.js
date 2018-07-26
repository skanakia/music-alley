import "./main.css";
import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import API from '../../utils/API';
import {Howl, Howler} from 'howler';
// import ReactPlayer from 'react-player';

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
   
    onStop = recordedBlob => {
      console.log('recordedBlob is: ', recordedBlob);
      API.createAudioFile(userid, id, recordedBlob);
      
        const object = this.refs.Progress1;
        object.src = recordedBlob.blobURL; 
      
      // const sound = new Howl({
      //   src: [recordedBlob.blobURL],
      //   format: ['webm']
      //   }); 
        // sound.play();

    }

   
    render() {
      return (
        
        <div className="main">
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            strokeColor="#000000"
            backgroundColor="#FF4081"
            />
            <button id="startb" className="btn btn-primary" onClick={this.startRecording} type="button">Start Recording</button>
            <button id="stopb" className="btn btn-danger" onClick={this.stopRecording} type="button">Stop</button>
            <audio id="player" ref="Progress1" video controls="controls" type="video/webm"></audio>
          </div>
      );
    }
  }
export default main;