import React, {Component} from 'react'

class Profile extends React.Component {

    render() {

        return (
            <div className="container">
                <h1>Profile</h1>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label"></label>
                    <div className="alert alert-success col-sm-10" role="alert" id="savemess">
                        Profile successfully saved
                    </div>
                </div>
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
                        <label htmlFor="phoneFld" className="col-sm-1 col-form-label"> Phone
                        </label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control wbdv-phone-fld" id="phoneFld"
                                   placeholder="(555) 867-5309">
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="emailFld" className="col-sm-1 col-form-label"> Email
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control wbdv-email-fld"
                                   id="emailFld" placeholder="alice@wonderland.com">
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-1 col-form-label"> Role </label>
                        <div className="col-sm-10">
                            <select className="form-control" id="role">
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="dobFld" className="col-sm-1 col-form-label"> Date of
                            Birth </label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control wbdv-dob-fld" id="dobFld"
                                   placeholder="mm/dd/yyyy">
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-success btn-block" id="update">
                                Update
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label"></label>
                        <div className="col-sm-10">
                            <a className="btn btn-danger btn-block" href="/index.html" id="logout">
                                Logout</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Profile;