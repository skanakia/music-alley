import "./audio.css";
import React, { Component } from 'react';
import Main from "../main";
import Sidebar from "../sidebar";

const audio = () => (
    <audio controls="controls">
    <source src= { this.props.recordedBlob.blobURL } type="audio/mp3"></source>
    </audio>
)


export default audio;