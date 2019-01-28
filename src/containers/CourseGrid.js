import React from "react";
import CourseCard from "../components/CourseCard";
import CourseGridStyle from "../styling/CourseGridStyle.css";


class CourseGrid extends React.Component {
    render() {
        return (
                <div className="card-columns">
                    <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />

                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
        )
    }
}

export default CourseGrid