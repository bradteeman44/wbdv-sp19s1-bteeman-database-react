import React from 'react'
import CourseService from "../services/CourseService"
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseEditorStyle from "../styling/CourseEditorStyle.css"
import WidgetList from "../components/WidgetList";
import {Link} from 'react-router-dom'

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        const courseId = parseInt(props.match.params.id);
        const course = this.courseService.findCourseById(courseId);
        this.state = {
            course: course,
            selectedModule: course.modules[0],
            selectedLesson: course.modules[0].lessons[0],
            selectedTopic: course.modules[0].lessons[0].topics[0]
        }
    }

    selectModule = module =>
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic: module.lessons[0].topics[0]
        })

    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })

    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
        })


    render() {
        return (
            <div
                className="container-fluid"
                id="courseEditor">
                <h1>
                    <Link
                        id="tableBtn"
                        className="btn-lg float-left btn-primary"
                        to={`/table`}><i className="fa fa-list"></i></Link>
                        Course Editor: {this.state.course.title}
                </h1>
                <div
                    className="row">
                    <div
                        className="col-2"
                        id="modules">
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            modules={this.state.course.modules}
                            course={this.state.course}
                            courseService={this.courseService}
                        />
                    </div>
                    <div
                        className="col-10">
                        <LessonTabs
                            lessons={this.state.selectedModule.lessons}
                            module={this.state.selectedModule}
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            courseService={this.courseService}/>
                        <TopicPills
                            topics={this.state.selectedLesson.topics}
                            lesson={this.state.selectedLesson}
                            selectTopic={this.selectTopic}
                            selectedTopic={this.state.selectedTopic}
                            courseService={this.courseService}/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditor