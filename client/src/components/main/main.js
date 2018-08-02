import "./main.css";
import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import API from '../../utils/API';
import { Howl, Howler } from 'howler';
// import ReactPlayer from 'react-player';
import Audio from '../audio';
import Sidebar from '../sidebar';
import AudioSpectrum from 'react-audio-spectrum';
import ReactAudioPlayer from 'react-audio-player';
import Recorder from 'recorder-js';
import WaveStream from 'react-wave-stream';
const AWS = require("aws-sdk");
// const data = getMyAudioFrequencyData();
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const recorder = new Recorder(audioContext, {
  // An array of 255 Numbers
  // You can use this to visualize the audio stream
  // If you use react, check out react-wave-streams

  // onAnalysed: data => console.log(data),
});


// require('dotenv').config();

// const creds = new AWS.Credentials({
//   accessKeyId: process.env.AWSAccessKeyId, secretAccessKey: process.env.AWSSecretKey, sessionToken: null
// });

// AWS.config.update({region: 'us-east-1', 
//   credentials: creds
// })

// const s3 = new AWS.S3({apiVersion: '2006-03-01'});

let userid;
let id;

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      userid: 1,
      id: 1,
      blobURL: props.blobURL,
      blob: {},
      src: "",
      record_state: props.record_state
    }

    userid = this.state.userid;
    id = this.state.id;
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
  }

  componentWillReceiveProps() {
    
    if (this.state.record_state === true) {
      
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => recorder.init(stream))
        .catch(err => console.log('Uh oh... unable to get stream...', err));

      recorder.start()
    } else if (this.state.record_state === false) {
      recorder.stop()
    }
  }



  startRecording() {

    
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => recorder.init(stream))
      .catch(err => console.log('Uh oh... unable to get stream...', err));


    recorder.start()
      .then(() => this.setState({ record: true }));

     
    
  }

  stopRecording() {
    recorder.stop()
      .then(({ blob, buffer }) => {
        console.log(blob);
        this.setState({ blob: blob, record: false });
        // API.createAudioFile(userid, id, blob);
        Recorder.download(blob, 'recording' + (Math.ceil(Math.random() * 100000000000)))
        // buffer is an AudioBuffer
      });
  }

  //   download() {
  //   Recorder.download(this.state.blob, 'recording'+ (Math.ceiling(Math.random * 100000000000)) +'.wav'); // downloads a .wav file
  // }

  // startRecording = () => {
  //   this.setState({
  //     record: true
  //   });
  // }

  // stopRecording = () => {
  //   this.setState({
  //     record: false
  //   });
  // }

  // onStop = recordedBlob => {
  //   console.log('recordedBlob is: ', recordedBlob);

  //   this.setState({ src: recordedBlob.blobURL, blob: recordedBlob.blob });

  // var file = new Buffer(this.state.blob);


  // var params = { 
  //   Body: recordedBlob.blob,
  //   Bucket: 'arn:aws:s3:::music-alley-audio-files', 
  //   Key: recordedBlob.blobURL,
  //   ContentType: 'audio/wav',
  //   ContentLength: recordedBlob.blob.size
  // };
  // return new Promise(function(resolve, reject) {
  //   s3.upload(params, function(err, data) {
  //     if(err) {
  //       console.log(err); 
  //       return reject(err);
  //     } else {
  //       console.log(data);
  //       return resolve(data);
  //     }
  //   });
  // });

  // API.createAudioFile(userid, id, recordedBlob);

  // const object = this.refs.Progress1;
  // object.src = recordedBlob.blobURL;



  // <Audio
  // src = {recordedBlob.blobURL}
  // />
  // const sound = new Howl({
  //   src: [recordedBlob.blobURL],
  //   format: ['webm']
  //   }); 
  // sound.play();
  // }


  render() {
    return (

      <div className="main">
        {/* <WaveStream
        data={data}
      /> */}
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          strokeColor="#FFFFFF"
          backgroundColor="#FF00FF"
        />
        <button id="startb" className="btn btn-primary" onClick={this.startRecording} type="button">Start Recording</button>
        <button id="stopb" className="btn btn-danger" onClick={this.stopRecording} type="button">Stop</button>
        {/* <audio id="player" ref="Progress1" src={this.state.src} video controls="controls" type="video/webm"></audio> */}
        <ReactAudioPlayer
          src={this.state.src}
          id="audio-element"
          preload="auto"
          controls
        />
        <AudioSpectrum
          id="audio-canvas"
          height={165}
          width={790}
          audioId={'audio-element'}
          capColor={'red'}
          capHeight={2}
          meterWidth={2}
          meterCount={512}
          meterColor={[
            { stop: 0, color: '#f00' },
            { stop: 0.5, color: '#0CD7FD' },
            { stop: 1, color: 'red' }
          ]}
          gap={4}
        />
      </div>
    );
  }
}
export default main;