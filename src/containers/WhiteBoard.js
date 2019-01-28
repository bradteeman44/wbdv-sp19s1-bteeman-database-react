import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "../components/CourseEditor";
import HomePage from "../styling/HomePage.css";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class WhiteBoard extends Component {
    constructor() {
        super();
        this.courseService = new CourseService()
        this.state = {
            course: {title: '', id: ''},
            courses: this.courseService.findAllCourses()
        }
    }

    deleteCourse = course =>
        this.setState({
            courses: this.courseService.deleteCourse(course)
        })
    addCourse = () =>
        this.setState({
            courses: this.courseService.addCourse(this.state.course)
        })

    titleChanged = (event) =>
        this.setState(
            {
                course: {title: event.target.value, id: (Math.random() * 1000000000)}
            });

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <a className="navbar-brand" href="#">Course Manager</a>
                        <ul className="navbar-nav">
                            <li className="nav-item active"><a className="nav-link"></a></li>
                            <li className="nav-item"><a className="nav-link"></a></li>
                            <li className="nav-item"><a className="nav-link"></a></li>
                        </ul>
                    </div>
                    <label htmlFor="newCourseTitleFld"></label> <input
                    className="form-control col-8" type="text" id="newCourseTitleFld"
                    placeholder="New Course Title" onChange={this.titleChanged}/>
                    <button className="btn btn-primary btn-circle" value="ADDCOURSEBTN"
                            id="add" onClick={this.addCourse}>
                        <i className="fa fa-plus"></i>
                    </button>
                </nav>
                <div className="container d-none d-md-block" id="header">
                    <div className="row">
                        <div className="col-6">Title</div>
                        <div className="col-2">Owned by</div>
                        <div className="col-2">Last modified by me</div>
                        <div className="col-1">
                            <button type="button" className="btn" data-toggle="button" aria-pressed="false">
                                <i className="fa fa-th"></i>
                            </button>
                        </div>
                        <div className="col-1">
                            <FontAwesomeIcon icon={"sort-alpha-down"}/>
                        </div>
                    </div>
                </div>
                <Router>
                    <div>
                        <Link to="/">Course Grid</Link> |
                        <Link to="/table">Course Table</Link>
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
                    </div>
                </Router>
                <button className="btn btn-primary btn-circle shadow "
                        value="FIXEDADDCOURSEBTN" id="fixedAdd" onClick={this.addCourse}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        )
    }
}

export default WhiteBoard;