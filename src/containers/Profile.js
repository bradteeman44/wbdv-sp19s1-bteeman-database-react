import React from 'react'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            usernameFld: this.props.user.username,
            passwordFld: this.props.user.password,
            firstNameFld: this.props.user.firstName,
            roleFld: this.props.user.role,
            lastNameFld: this.props.user.lastName
        }
    }

    componentDidMount() {
        console.log(this.state.user)
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

    firstNameChanged = (event) => {
        this.setState(
            {
                firstNameFld: event.target.value
            });
    }

    roleChanged = (event) => {
        console.log(event.target.value)
        this.setState(
            {
                roleFld: event.target.value
            });
    }

    lastNameChanged = (event) => {
        this.setState(
            {
                lastNameFld: event.target.value
            });
    }

    updateUser = () => {
        let user = {
            id: this.state.user.id,
            username: this.state.usernameFld,
            password: this.state.passwordFld,
            firstName: this.state.firstNameFld,
            lastName: this.state.lastNameFld,
            role: this.state.roleFld
        }
        console.log(user)
        this.props.updateUser(user)

    }

    logoutUser = () => {
        this.props.logoutUser()
    }

    render() {
        return (
            <div className="container">
                <h1>Profile</h1>
                <div className="form-group row">
                    <label
                        className="col-sm-1 col-form-label">

                    </label>
                    <div
                        className="alert alert-success col-sm-10"
                        role="alert"
                        id="savemess">
                        Profile successfully saved
                    </div>
                </div>
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
                                placeholder={this.state.user.username}
                                onChange={this.usernameChanged}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="phoneFld"
                            className="col-sm-1 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input
                                   className="form-control wbdv-phone-fld"
                                   id="phoneFld"
                                   placeholder={this.state.user.password}
                                   onChange={this.passwordChanged}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="emailFld"
                            className="col-sm-1 col-form-label">
                            First Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control wbdv-email-fld"
                                id="emailFld"
                                placeholder={this.state.user.firstName}
                                onChange={this.firstNameChanged}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="emailFld"
                            className="col-sm-1 col-form-label">
                            Last Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control wbdv-email-fld"
                                id="emailFld"
                                placeholder={this.state.user.lastName}
                                onChange={this.lastNameChanged}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="role"
                            className="col-sm-1 col-form-label">
                            Role
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-control"
                                id="role"
                                placeholder={this.state.user.role}
                                onChange={this.roleChanged}>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                type="button"
                                className="btn btn-success btn-block"
                                id="update"
                                onClick={this.updateUser}>
                                Update
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            className="col-sm-1 col-form-label">
                        </label>
                        <div className="col-sm-10">
                            <button
                                type="button"
                                className="btn btn-danger btn-block"
                                href="/index.html"
                                id="logout"
                                onClick={this.logoutUser}>
                                Logout
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Profile;