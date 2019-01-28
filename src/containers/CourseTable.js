import React from 'react'
import CourseRow from "../components/CourseRow";
const CourseTable = ({courses, deleteCourse}) =>

    <div className="container">
        {
            courses.map(course =>
                <CourseRow
                    deleteCourse={deleteCourse}
                    course={course}
                    key={course.id}/>
            )
        }
    </div>

export default CourseTable