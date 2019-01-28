import React from "react";
import CourseTable from "./CourseTable";
import CourseService from '../services/CourseService'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import HomePage from "../components/HomePage.css";
import {Link, Route, Router} from "react-router-dom";


class WhiteBoard extends React.Component {
    constructor() {
        super();
        this.courseService = new CourseService()
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    deleteCourse = course =>
        this.setState({
            courses: this.courseService.deleteCourse(course)
        })
    addCourse = () =>
        this.setState({
            courses: this.courseService.addCourse(null)
        })

    render() {
        return (
            <html>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <a className="navbar-brand" href="#">Course Manager</a>
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a className="nav-link"
                                                           href="/home/home.template.client.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/index.html">Logout</a></li>
                        <li className="nav-item"><a className="nav-link"
                                                    href="/profile/profile.template.client.html">Profile</a></li>
                    </ul>
                </div>
                <label htmlFor="newCourseTitleFld"></label> <input
                className="form-control col-8" type="text" id="newCourseTitleFld"
                placeholder="New Course Title"/>
                <button className="btn btn-primary btn-circle" value="ADDCOURSEBTN"
                        id="add">
                    <i className="fa fa-plus"></i>
                </button>
            </nav>
                <div> |
                    <CourseTable courses={this.state.courses}/>}/>
                </div>
            </html>
        )
    }
}

export default WhiteBoard