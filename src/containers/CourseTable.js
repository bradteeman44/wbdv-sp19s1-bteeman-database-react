import React from "react";
import CourseRow from "../components/CourseRow";

class CourseTable extends React.Component {
    render() {
        return (
            <body>
            <div className="container d-none d-md-block" id="header">
                <div className="row">
                    <div className="col-6">Title</div>
                    <div className="col-2">Owned by</div>
                    <div className="col-2">Last modified by me</div>
                    <div className="col-1">
                        <i className="fa fa-th"></i>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-sort-alpha-down"></i>
                    </div>
                </div>
            </div>
            <div className="container" id="coursesCreatedToday">
                <CourseRow/>
            </div>
            </body>
        )
    }

}

export default CourseTable