import React, { Component } from 'react';
// import './App.css';
import Maine2 from "../../components/maine2";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import Body from "../../components/body";
import Logo from "../../components/logo";
import Results from '../../components/results';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: 1
    }
  }


  

  render() {
    return (
      <div>
        Please Log-In to see more
      </div>
    );
  }
}

export default Home;