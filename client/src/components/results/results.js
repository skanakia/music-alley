import React, { Component } from "react";
import ResultCard from "../resultCard";
import API from "../../utils/API";
import Wrapper from "../wrapper"
import "./results.css"

class Results extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: props.id,
        recordings: []
      }
    }
   
  componentDidMount() {

    API.getFilesByProject(this.state.id).then(response => {
        console.log(response)
        
        this.setState({
            recordings: response.data
        })
        console.log("SHAPE:", this.state.recordings)
    })

    
  }


   
    render() {


      return (
        <Wrapper>
        <div className="audio-result">
          {this.state.recordings.map(element => {
            //   <ResultCard
            //     id={this.state.id}
            //     audio={element.file_url}
            //   />
            <div>Hello</div>
          })}
        </div>
        </Wrapper>
      );
    }
  }

export default Results;