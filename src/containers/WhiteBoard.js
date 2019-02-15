import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import HomePage from "../styling/HomePage.css";
import CourseEditor from "./CourseEditor";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import UserService from "../services/UserService";

class WhiteBoard extends Component {
    constructor() {
        super();
        this.courseService = new CourseService();
        this.userService = new UserService();
        this.state = {
            course: {
                title: 'New Course', modules: [{
                    id: '', title: '', lessons: [{id: '', title: '', topics: [{id: '', title: '', widgets: [{}]}]}]
                }]
            },
            courses: [],
            updateCourseFld: '',
            loggedIn: true
        }

        this.titleChanged = this.titleChanged.bind(this);
    }

    componentDidMount() {
        this.updateCourses();
    }

    updateCourses = () => {
        this.courseService.findAllCourses()
            .then(courses =>
                this.setState({courses: courses}));
    };

    deleteCourse = course => {
        this.courseService.deleteCourse(course);
        this.setState({
            courses: this.updateCourses()
        })
    }

    addCourse = () => {
        this.courseService.addCourse(this.state.course);
        this.setState({
            courses: this.updateCourses(),
            updateCourseFld: ''
        })
    }

    updateCourse = course =>
        this.setState({
            courses: this.props.courseService.updateCourse(this.props.course, course, this.state.updateCourse),
            updateCourseFld: ''
        })

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
        this.setState(
            {
                loggedIn: true
            }
        )
        if(this.state.loggedIn === true) {
            return <Redirect to='/grid'/>
        }
    };

    render() {
        return (
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
                        <a
                            className="navbar-brand"
                            href="#">
                            WhiteBoard
                        </a>
                        <ul className="navbar-nav">
                            <Router>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/profile">
                                        Profile
                                    </Link>
                                    <Redirect path="/profile"
                                           exact
                                           component={Profile}/>

                                </li>
                            </Router>
                            <li className="nav-item"></li>
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
                <Router>
                    <div>
                        <Route path="/"
                               exact
                               render={() =>
                                   <Login
                                       login={this.loginUser}/>}/>
                        <Route path='/grid' exact
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
                               component={Register}/>
                        <Route path="/profile"
                                  exact
                                  component={Profile}/>
                    </div>
                </Router>
                <button
                    style={{display: this.state.loggedIn ? '' : 'none'}}
                    className="btn btn-primary btn-circle shadow "
                    value="FIXEDADDCOURSEBTN"
                    id="fixedAdd"
                    onClick={this.addCourse}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        )
    }
}

export default WhiteBoard;