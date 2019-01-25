import React from "react";
import {Link, Route, Router} from "react-router-dom";
import CourseRow from "../components/CourseRow";

class CourseTable extends React.Component {
    render = () => {
        return (
            <table className="table">
                <tbody>
                {courses.map((course, key) =>
                    <CourseRow course={course}key={key}/>
                )}
                </tbody>
            </table>
        )
    }
}

export default CourseTable