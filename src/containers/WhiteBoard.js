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
        this.updateCourses();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.prevUser !== this.state.user) {
            console.log("updateUser")
            this.findUser()
        }
    }

    updateCourses = () => {
        this.courseService.findAllCourses()
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
        this.courseService.addCourse(this.state.course).then(this.updateCourses);
        this.setState({
            updateCourseFld: ''
        })
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
        this.setState({
            user: this.userService.loginUser(username, password)
        })
    };

    findUser = () => {
        this.setState({
            user: this.userService.findUserById(this.state.user.id),
            prevUser: this.userService.findUserById(this.state.user.id)
        })
    }
    updateUser = (username, role) => {
        this.userService.updateUser(username, role)
    }

    logoutUser = () => {
        this.userService.logoutUser()
    }

    registerUser = (username, password) => {
        console.log(username)
        console.log(password)
        this.setState({
            user: this.userService.registerUser(username, password)
        })
        console.log(this.state.user)
    }

    profileUser = () => {
        this.setState(
            {
                user: this.userService.profileUser()
            }
        )
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
                                       courses={this.state.courses}/>}/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor}/>
                        <Route path='/table' exact
                               render={() =>
                                   <CourseTable
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