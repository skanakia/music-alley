import React, { Component } from 'react';
import WaveStream from 'react-wave-stream';
import Recorder from 'recorder-js';
import API from '../../utils/API'
import './maine2.css';
const AWS = require("aws-sdk");

require('dotenv').config();

const creds = new AWS.Credentials({
  accessKeyId: 'AKIAJIZNTBWOGHW4VT2A', secretAccessKey: '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', sessionToken: null
});

AWS.config.update({region: 'us-east-1', 
  credentials: creds
})

const s3 = new AWS.S3({apiVersion: '2006-03-01'});


class Maine2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blob: null,
      isRecording: false,
      stream: null,
      analyserData: {data: [], lineTo: 0},
      id: 1,
      userid: 1,
      record_state: props.record_state
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.download = this.download.bind(this);

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

    this.recorder = new Recorder(this.audioContext, {
      onAnalysed: data => this.setState({analyserData: data}),
    });

    navigator.mediaDevices.getUserMedia({audio: true})
      .then((stream) => {
        this.setState({stream});
        this.recorder.init(stream);
      })
      .catch(this.dontGotStream);
  }

  componentWillReceiveProps() {
    
    if (this.state.record_state === true) {
      this.recorder.start().then(() => this.setState({isRecording: true}));
    } else {
      this.recorder.stop()
      .then(({blob}) => {this.setState({
        isRecording: false,
        blob,
      })
      console.log(blob);

        const randNum = (Math.ceil(Math.random() * 1000000000000))

        var params = { 
          Body: blob,
          Bucket: 'music-alley-audio-files', 
          Key: ('Audio' + randNum),
          ContentType: 'audio/wav'
        };
        return new Promise(function(resolve, reject) {
          s3.putObject(params, function(err, data) {
            if(err) {
              console.log(err); 
              return reject(err);
            } else {
              console.log(data);
              return resolve(data);
            }
          });
        
        }).then(function(req, res){

          const AudioURL = ('https://s3.amazonaws.com/music-alley-audio-files/Audio' + randNum)

          API.createAudioFile(1, 1, {file_url: AudioURL});

        })

        
      })
      


    }
  }


  start() {
    this.recorder.start()
      .then(() => this.setState({isRecording: true}));
  }

  stop() {
    this.recorder.stop()
      .then(({blob}) => {this.setState({
        isRecording: false,
        blob,
      })
      console.log(blob);

    //  new Promise (function(resolve, reject) {
    //    console.log(blob)
      //  return resolve(Recorder.download(blob, 'react-audio'))}).then((downloaded) => {
      //   console.log(downloaded);

        // var base64data = new Buffer([blob], 'binary');

        const randNum = (Math.ceil(Math.random() * 1000000000000))

        var params = { 
          Body: blob,
          Bucket: 'music-alley-audio-files', 
          Key: ('Audio' + randNum),
          ContentType: 'audio/wav'
        };
        return new Promise(function(resolve, reject) {
          s3.putObject(params, function(err, data) {
            if(err) {
              console.log(err); 
              return reject(err);
            } else {
              console.log(data);
              return resolve(data);
            }
          });
        
        }).then(function(req, res){

          const AudioURL = ('https://s3.amazonaws.com/music-alley-audio-files/Audio' + randNum)

          API.createAudioFile(1, 1, {file_url: AudioURL});

        })

        
      })
      


    // });
    
  }

  dontGotStream(error) {
    console.log('Get stream failed', error);
  }

  download() {
    Recorder.download(this.state.blob, 'react-audio');

    this.setState({blob: null});
  }

  render() {
    const {
      isRecording,
      blob,
      stream,
    } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Recording Studio</h2>

          <div className="App-buttons">
            {isRecording ? (
              <button onClick={this.stop}>Stop</button>
            ) : (
              <button onClick={this.start}>Start</button>
            )}
            {blob && (
              <button
                onClick={this.download}
              >
                Download
              </button>
            )}
          </div>
        </div>
        <div className="App-studio">
          <WaveStream {...this.state.analyserData} />
        </div>
      </div>
    );
  }
}

export default Maine2;