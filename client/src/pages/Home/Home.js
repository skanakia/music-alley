import React, { Component } from 'react';
// import './App.css';
import Main from "../../components/main";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import Body from "../../components/body";
import Logo from "../../components/logo";
import Navbar from "../../components/navbar"


class Home extends Component {
    


    render() {
      return (
        <div>
          <Body />
          <Logo />
          <Sidebar />
          <Main />
          <Footer />
        </div>
      );
    }
  }

  export default Home;