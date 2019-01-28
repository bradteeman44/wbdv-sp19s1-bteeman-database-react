import React from 'react'

const CourseRow = (course) => {
    return (
        <div className="row wbdv-course-template" id="row">
            <div className="col-sm-6 d-none d-sm-block">
                <a className="btn btn-primary btn-sm"
                   href="/course-editor/course-editor.template.client.html"
                   id="course"> <i className="fa fa-bars fa-sm"></i>
                </a> {course.title}
            </div>
            <div className="col-2 d-none d-sm-block" id="owned">me</div>
            <div className="col-2 d-none d-sm-block" id="modified">6:45 PM</div>
            <div className="col">
                <button className="btn float-right" type="button" value="Close"
                        id="closeBtn">
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}

export default CourseRow