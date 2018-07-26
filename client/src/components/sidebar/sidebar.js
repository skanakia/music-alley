// import React from "react";
import React, { Component } from "react";
import "./sidebar.css";
import API from "../../util/api";
import Main from "../main"
import Audio from "../audio"

console.log(<Audio />.props)

// const sidebar = () => (
//     <p className="sidebar">
//         <h1>Saved Recordings</h1>
//         <ul>
//             <li>
//                 <a href={ blobURL }>Recording</a>
//             </li>
//         </ul>
//     </p>
// )

class sidebar extends Component {
    state = {
      recs: [],
      recordedBlob: []
    };

    componentDidMount() {
        this.loadRecs();
      }
    
      loadRecs = () => {
        API.getRecs()
          .then(res => this.setState({ recs: res.data }))
          .catch(err => console.log(err));
      };

render() {
    return (

<p className="sidebar">
        <h1>Playlist</h1>
        {this.state.recs.length ? (
        <ul>
        {this.state.recs.map(recs => (
            <li>
                <Audio />
            </li>
        ))}
        </ul>
        ) : (
            <h3>No Results to Display</h3>
          )}
    </p>
   );
  }
}

export default sidebar;