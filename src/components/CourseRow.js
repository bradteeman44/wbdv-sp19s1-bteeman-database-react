import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course.title}, {course.id}) => {
    return (
        <div className="row wbdv-course-template" id="row">
            <div className="col-sm-6 d-none d-sm-block">
                <Link to={'/course/edit/${course.id}'}>
                    {course.title}
                    <button
                        className="btn btn-primary btn-sm"
                        id="course">
                        <i className="fa fa-bars fa-sm"></i>
                    </button>
                </Link>
            </div>
            <div
                className="col-2 d-none d-sm-block"
                id="owned">
                me
            </div>
            <div
                className="col-2 d-none d-sm-block"
                id="modified">
                6:45 PM
            </div>
            <div
                className="col">
                <button
                    className="btn float-right"
                    type="button"
                    value="Close"
                    id="closeBtn">
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}

export default CourseRow