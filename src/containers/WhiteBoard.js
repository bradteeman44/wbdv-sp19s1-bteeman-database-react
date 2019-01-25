import React from "react";
import {Link, Route, Router} from "react-router-dom";
import CourseTable from "./CourseTable";

class WhiteBoard extends React.Component {
    render = () => {
        return (
            <Router>
                <div>
                    <Link to="/course/table">Table</Link>
                    | <Link to="/course/grid">Grid</Link>
                    <Route path="/course/table"
                           render={() => <CourseTable courses={courses}/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGrid courses={courses}/>}/>
                </div>
            </Router>
        )
    }
}