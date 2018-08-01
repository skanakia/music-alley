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
            recordings: [],
            rec_play_state: props.rec_play_state
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

            <div className="audio-result">
                <button className="record-play-all" onClick={props.onClick1}>Record/Play All</button>
                <button className="Stop-recording" onClick={props.onClick2}>Stop Recording/Playing All</button>
                <Wrapper>
                    {this.state.recordings.map(element => (
                        <ResultCard
                            _id={element._id}
                            id={this.state.id}
                            audio={element.file_url}
                            play_state = {this.state.rec_play_state}
                        />
                        // <div>Hello</div>
                    ))}
                </Wrapper>
            </div>

        );
    }
}

export default Results;