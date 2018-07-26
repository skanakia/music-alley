import React, { Component } from "react";
import "./modal.css";

class modal extends Component {

render() {
    return (

<div id="id01" class="w3-modal">
<div class="w3-modal-content">
  <div class="w3-container">
    <span onclick="document.getElementById('id01').style.display='none'" 
    class="w3-button w3-display-topright">&times;</span>
  </div>
</div>
</div> 

);
}
}

export default modal;