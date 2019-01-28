import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

library.add(faTimes)

const CourseRow = ({course, deleteCourse}) => {
    return (
        <div className="row wbdv-course-template" id="row">
            <div className="col-sm-6 d-none d-sm-block">
                <Link className="btn btn-primary btn-sm" id="course" to={`/course/${course.id}`}>
                    <i className="fa fa-bars fa-sm"></i>
                </Link>
                {course.title}
            </div>
            <div className="col-2 d-none d-sm-block" id="owned">me</div>
            <div className="col-2 d-none d-sm-block" id="modified">6:45 PM</div>
            <div className="col">
                <button className="btn float-right" type="button" value="Close"
                        id="closeBtn" onClick={() => deleteCourse(course)}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </div>
        </div>
    )
}

export default CourseRow