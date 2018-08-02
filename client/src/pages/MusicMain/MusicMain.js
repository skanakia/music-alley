import React, { Component } from 'react';
// import './App.css';
import Maine2 from "../../components/maine2";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import Body from "../../components/body";
import Logo from "../../components/logo";
import Results from '../../components/results';
import "./MusicMain.css"


class MusicMain extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      rec_play: false
    }
    this.recordPlayAll = this.recordPlayAll.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
  }


  recordPlayAll() {
    this.setState({ rec_play: true });
  }

  stopRecord() {
    this.setState({ rec_play: false });
  }


  render() {
    return (
      <div>
        <Body />
        <Logo />
        <Sidebar />
        <Maine2 record_state={this.state.rec_play}/>
        <button className="record-play-all" onClick={this.recordPlayAll}>Record/Play All</button>
        <button className="Stop-recording" onClick={this.stopRecord}>Stop Recording/Playing All</button>
        <Results id={this.state.id} rec_play_state={this.state.rec_play} />
        <Footer />
      </div>
    );
  }
}

export default MusicMain;