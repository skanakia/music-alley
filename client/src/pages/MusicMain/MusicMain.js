import React, { Component } from 'react';
// import './App.css';
import Main from "../../components/main";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import Body from "../../components/body";
import Logo from "../../components/logo";
import Results from '../../components/results';


class MusicMain extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      rec_play: false
    }
    this.recordPlayAll = this.recordPlayAll.bind(this);
  }


  recordPlayAll() {
    this.setState({rec_play: true});
  }

  stopRecord() {
    this.setState({rec_play: false});
  }
  

  render() {
    return (
      <div>
        <Body />
        <Logo />
        <Sidebar />
        <Main />
        <Results id={this.state.id} onClick1={this.recordPlayAll} onClick2={this.stopRecord} rec_play_state={this.state.rec_play}/>
        <Footer />
      </div>
    );
  }
}

export default MusicMain;