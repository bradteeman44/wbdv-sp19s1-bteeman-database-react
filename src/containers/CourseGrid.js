import React from 'react'
import CourseCard from '../components/CourseCard'
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse}) => {
    console.log(courses)

        return(
    <div id="courseGrid">
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
                        className="btn"
                        to={`/table`}><i className="fa fa-list"></i></Link>
                </div>
                <div
                    className="col-1">
                    <i className="fa fa-sort-alpha-asc"></i>
                </div>
            </div>
        </div>
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard
                        deleteCourse={deleteCourse}
                        course={course}
                        key={course.id}/>
                )
            }
        </div>
    </div>

)
}

export default CourseGrid