import React from 'react'
import CourseRow from "../components/CourseRow";
import {Link} from "react-router-dom";

const CourseTable = ({courses, deleteCourse}) =>
    <div>
        <div
            className="container d-none d-md-block"
            id="header">
            <div
                className="row">
                <div
                    className="col-6">
                    Title
                </div>
                <div
                    className="col-2">
                    Owned by
                </div>
                <div
                    className="col-2">
                    Last modified by me
                </div>
                <div
                    className="col-1">
                    <Link
                        className="btn "
                        to={`/`}><i className="fa fa-th"></i></Link>
                </div>
                <div
                    className="col-1">
                    <i className="fa fa-sort-alpha-asc"></i>
                </div>
            </div>
        </div>
        <div
            className="container">
            {
                courses.map(course =>
                    <CourseRow
                        deleteCourse={deleteCourse}
                        course={course}
                        key={course.id}/>
                )
            }
        </div>
    </div>

export default CourseTable