import React from 'react'
import CourseRow from "../components/CourseRow";
import {Link} from "react-router-dom";
import CourseService from "../services/CourseService";

class CourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        this.updateCourses();
    }

    componentDidUpdate(prevProps) {
        if (this.props.courses !== prevProps.courses) {
            this.updateCourses();
        }
    }

    updateCourses = () => {
        this.courseService.findAllCourses()
            .then(courses =>
                this.setState({courses: courses}));
    };

    render() {
        return (
            <div id="courseTable">
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
                        this.state.courses.map(course =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                course={course}
                                key={course.id}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default CourseTable