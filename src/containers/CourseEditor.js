import React from 'react'
import CourseService from "../services/CourseService"
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseEditorStyle from "../styling/CourseEditorStyle.css"

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        //const courseId = parseInt(props.match.params.id);
        const course = this.courseService.findCourseById(123);
        this.state = {
            course: course,
            module: course.modules[0]
        }
    }
    selectModule = module =>
        this.setState({
            module: module
        })


    render() {
        return (
            <div>
                <h2>Course Editor: {this.state.course.title}</h2>
                <div className="row">
                    <div className="col-2">
                        <ModuleList
                            selectModule={this.selectModule}
                            modules={this.state.course.modules}/>
                    </div>
                    <div className="col-10">
                        <LessonTabs
                            lessons={this.state.module.lessons}/>
                        <TopicPills/>
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseEditor