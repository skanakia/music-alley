import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Body from "./components/body";
import Logo from "./components/logo";
import Sprite from "./components/sprite";

const App = () => (

    <div>
      <Body />
      <Logo />
      <Main />
      <Sprite />
      <Sidebar />
      <Footer />
    </div>

);

export default App;
