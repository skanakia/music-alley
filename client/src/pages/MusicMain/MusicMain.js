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
      id: 1
    }
  }


  

  render() {
    return (
      <div>
        <Body />
        <Logo />
        <Sidebar />
        <Main />
        <Results id={this.state.id}/>
        <Footer />
      </div>
    );
  }
}

export default MusicMain;