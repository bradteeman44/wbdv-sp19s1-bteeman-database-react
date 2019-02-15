import React, {Component} from 'react'
import LoginStyle from "../styling/LoginStyle.css";
import UserService from "../services/UserService";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Register from "./Register";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameFld: '',
            passwordFld: '',
        }
    }

    usernameChanged = (event) => {
        this.setState(
            {
                usernameFld: event.target.value
            });
    }

    passwordChanged = (event) => {
        this.setState(
            {
                passwordFld: event.target.value
            });
    }

    render() {
        return (
            <div className="container">
                <h1
                    id="signInHeader">
                    Sign In
                </h1>
                <form action="">
                    <div className="form-group row">
                        <label
                            htmlFor="usernameFld"
                            className="col-sm-1 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control wbdv-username-fld"
                                id="usernameFld"
                                placeholder="Alice"
                                onChange={this.usernameChanged}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="passwordFld"
                            className="col-sm-1 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control wbdv-password-fld"
                                id="passwordFld"
                                placeholder="123qwe#$%"
                                onChange={this.passwordChanged}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            className="col-sm-1 col-form-label">
                        </label>
                        <div className="col-sm-10">
                            <button
                                className="btn btn-primary btn-block"
                                id="signInBtn"
                                onClick={() => this.props.login(this.state.usernameFld, this.state.passwordFld)}>
                                Sign in
                            </button>
                            <div className="row">
                                <div className="col-sm-12">
                                    <button
                                        className="btn btn-danger btn-block"
                                        id="cancelBtn">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="col-6">
                                        <a>
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <Link
                                            to="/register"
                                            className="float-right">
                                            Sign up
                                        </Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </form>
            </div>
        )

    }
}

export default Login;