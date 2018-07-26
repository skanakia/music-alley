// import React from "react";

import React, { Component } from "react";

import "./sidebar.css";

import API from "../../utils/API";

import Main from "../main"

class sidebar extends Component {

render() {
    return (
<div className="sidebar">

    <h1>Playlist</h1>
        <ul>
            <li>
            <a href="">Recording</a>
            </li>
        </ul>
            <h3>No Results to Display</h3>
    </div>
   );
  }
}



export default sidebar;