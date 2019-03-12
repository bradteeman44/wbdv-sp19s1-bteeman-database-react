import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import FacultyService from "../services/FacultyService";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.facultyService = new FacultyService();
        this.state = {
            user: {
                username: '',
                password: ''
            },
            usernameFld: '',
            passwordFld: '',
            verifyPasswordFld: ''
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

    verifyPasswordChanged = (event) => {
        this.setState(
            {
                verifyPasswordFld: event.target.value
            });
    }

    registerUser = () => {
        console.log(this.state.passwordFld)
        console.log(this.state.verifyPasswordFld)
        if(this.state.passwordFld === this.state.verifyPasswordFld) {
            this.props.register(this.state.usernameFld, this.state.passwordFld)
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>
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
                                id="password"
                                placeholder="123qwe#$%"
                                onChange={this.passwordChanged}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="verifypasswordFld"
                            className="col-sm-1 col-form-label">
                            Verify Password
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control wbdv-verifypassword-fld"
                                   id="verifypasswordFld"
                                   placeholder="123qwe#$%"
                                   onChange={this.verifyPasswordChanged}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                id="signUpBtn"
                                onClick={this.registerUser}>
                                Sign
                                up
                            </button>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Link
                                        to="/"
                                        className="btn btn-danger btn-block"
                                        id="cancelBtn">
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <Link
                                        to="/login">
                                        Login
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

export default Register;