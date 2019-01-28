import React from 'react'
import CourseCard from '../components/CourseCard'
import CourseGridStyle from '../styling/CourseGridStyle.css'

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
    <div className="card-deck">
        {
            courses.map(course =>
                <CourseCard
                    deleteCourse={deleteCourse}
                    course={course}
                    key={course.id}/>
            )
        }
    </div>

export default CourseGrid