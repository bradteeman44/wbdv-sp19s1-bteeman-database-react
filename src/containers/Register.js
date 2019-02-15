import React, {Component} from 'react'

class Register extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>
                <form action="">
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-1 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-username-fld" id="usernameFld"
                                   placeholder="Alice">
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-1 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-password-fld"
                                   id="password" placeholder="123qwe#$%">
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="verifypasswordFld" className="col-sm-1 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-verifypassword-fld"
                                   id="verifypasswordFld" placeholder="123qwe#$%">
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label"></label>
                        <div className="col-sm-10">
                            <a className="btn btn-primary btn-block"
                               href="/profile/profile.template.client.html" id="signUpBtn">Sign
                                up</a>
                            <div className="row">
                                <div className="col-sm-12">
                                    <a className="btn btn-danger btn-block" href="/index.html"
                                       id="cancelBtn">Cancel</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="/login/login.template.client.html">Login</a>
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