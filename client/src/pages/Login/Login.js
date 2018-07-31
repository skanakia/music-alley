import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import API from '../../utils/API'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    async getData() {
        const userName = this.state.username
        const passWord = this.state.password

        const results = await axios.post("http://localhost:3001/api/audio/user/login", { username: userName, password: passWord }, { crossDomain: true })
        return await results.json()
            .then(response => {
                console.log(response.data);
                if (response.status === 200) {
                    console.log(response.data);
                    // this.props.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // });
                    this.setState({
                        redirectTo: '/'
                    });
                    console.log(this.state);
                }
            }).catch(error => {
                console.log('login error:')
                console.log(error);
            })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        // API.login(this.state)
        const userName = this.state.username
        const passWord = this.state.password

        axios.post("http://localhost:3001/api/audio/user/login", { username: userName, password: passWord }, { crossDomain: true }).then(response => {
            // console.log(response.data);
            if (response.status === 200) {
                console.log(response.data);
                // this.props.updateUser({
                //     loggedIn: true,
                //     username: response.data.username
                // });
                this.setState({
                    redirectTo: '/'
                });
                console.log(this.state);
            }
        }).catch(error => {
            console.log('login error:')
            console.log(error);
        });
    }

    // this.getData();

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"

                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default LoginForm