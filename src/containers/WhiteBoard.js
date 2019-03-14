import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import HomePage from "../styling/HomePage.css";
import CourseEditor from "./CourseEditor";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import UserService from "../services/UserService";
import FacultyService from "../services/FacultyService";

class WhiteBoard extends Component {
    constructor() {
        super();
        this.courseService = new CourseService();
        this.userService = new UserService();
        this.facultyService = new FacultyService();
        this.state = {
            course: {
                title: 'New Course', modules: [{
                    id: '', title: '', lessons: [{id: '', title: '', topics: [{id: '', title: '', widgets: [{}]}]}]
                }]
            },
            courses: [],
            updateCourseFld: '',
            user: '',
            prevUser: '',
            loggedIn: true
        }

        this.titleChanged = this.titleChanged.bind(this);
    }

    componentDidMount() {
        if(this.state.user !== '') {
            this.updateCourses();
        }
    }

    /*
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.prevUser !== this.state.user) {
            console.log("updateUser")
            this.findUser()
        }
    }
    */

    updateCourses = () => {
        this.courseService.findAllCourses(this.state.user.id)
            .then(courses =>
                this.setState({courses: courses}));
    };

    deleteCourse = course => {
        this.courseService.deleteCourse(course);
        this.courseService.findAllCourses()
            .then(courses =>
                this.setState({courses: courses}));
    }

    addCourse = () => {
        console.log(this.state.user)
        if(this.state.user !== '') {
            this.courseService.addCourse(this.state.user.id, this.state.course).then(this.updateCourses);
            this.setState({
                updateCourseFld: ''
            })
        } else {
            alert("There is no user logged in.  Please login or register an account.")
        }
    }

    titleChanged = (event) =>
        this.setState(
            {
                course: {
                    title: event.target.value,
                    modules: [{id: '', title: '', lessons: [{id: '', title: '', topics: [{id: '', title: ''}]}]}]
                },
                updateCourseFld: event.target.value
            });

    loginUser = (username, password) => {
        console.log(username + password)
        let user = {
            username: username,
            password: password
        }
        this.userService.loginUser(user)
            .then(user => {
                this.setState({
                    user: user
                })
                console.log(this.state.user)
            })
    };

    createUser = (username, password) => {
        console.log(username + password)
        let user = {
            username: username,
            password: password
        }
        console.log(user)
        this.userService.createUser(user)
            .then(user => {
                this.setState({
                    user: user
                })
                this.loginUser(user);
            })
        console.log(this.state.user)
    };

    findUser = () => {
        this.setState({
            user: this.userService.findUserById(this.state.user.id),
            prevUser: this.userService.findUserById(this.state.user.id)
        })
    }

    updateUser = (user) => {
        console.log(user);
        this.userService.updateUser(user)
            .then(
                this.setState({
                    user: user
                })
            )
    }

    logoutUser = () => {
        this.userService.logoutUser()
            .then(
                this.setState({
                    user: ''
                })
            )
    }

    registerUser = (username, password) => {
        let user = {
            username: username,
            password: password
        }
        console.log(user)
        this.userService.registerUser(user)
            .then(user => {
                this.setState({
                    user: user
                })
                console.log(this.state.user)
            })
    }

    profileUser = () => {

    }

    render() {
        return (
            <Router>
                <div>
                    <nav
                        style={{display: this.state.loggedIn ? '' : 'none'}}
                        className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavDropdown">
                        <span
                            className="navbar-toggler-icon">
                        </span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavDropdown">
                            <Link
                                id="home"
                                to="/">
                                <i className="fa fa-home fa-2x"></i>
                            </Link>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/register">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <label
                            htmlFor="newCourseTitleFld">
                        </label>
                        <input
                            className="form-control col-8"
                            type="text"
                            id="newCourseTitleFld"
                            placeholder="New Course Title"
                            value={this.state.updateCourseFld}
                            onChange={this.titleChanged}/>
                        <button
                            className="btn btn-primary btn-circle"
                            value="ADDCOURSEBTN"
                            id="add" onClick={this.addCourse}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </nav>
                    <div>
                        <Route path="/login"
                               exact
                               render={() =>
                                   <Login
                                       login={this.loginUser}
                                       userService={this.userService}/>}/>
                        <Route path='/' exact
                               render={() =>
                                   <CourseGrid
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       user={this.state.user}
                                       courses={this.state.courses}/>}/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor}/>
                        <Route path='/table' exact
                               render={() =>
                                   <CourseTable
                                       user={this.state.user}
                                       courses={this.state.courses}
                                       deleteCourse={this.deleteCourse}/>}/>
                        <Route path="/register"
                               exact
                               render={() =>
                                   <Register
                                       userService={this.userService}
                                       register={this.registerUser}
                                       user={this.state.user}/>}/>
                        <Route path="/profile"
                               render={() =>
                                   <Profile
                                       userService={this.userService}
                                       logoutUser={this.logoutUser}
                                       updateUser={this.updateUser}
                                       user={this.state.user}/>}/>
                    </div>
                    <button
                        style={{display: this.state.loggedIn ? '' : 'none'}}
                        className="btn btn-primary btn-circle shadow "
                        value="FIXEDADDCOURSEBTN"
                        id="fixedAdd"
                        onClick={this.addCourse}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </Router>
        )
    }
}

export default WhiteBoard;