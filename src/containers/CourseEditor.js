import React from 'react'
import CourseService from "../services/CourseService"
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseEditorStyle from "../styling/CourseEditorStyle.css"
import WidgetList from "../components/WidgetList";

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        //const courseId = parseInt(props.match.params.id);
        const course = this.courseService.findCourseById(123);
        this.state = {
            course: course,
            module: course.modules[0],
            lesson: course.modules[0].lessons[0],
            topic: course.modules[0].lessons[0].topics[0]
        }
    }
    selectModule = module =>
        this.setState({
            module: module,
            lesson: module.lessons[0],
            topic: module.lessons[0].topics[0]
        })

    selectLesson = lesson =>
        this.setState({
            lesson: lesson,
            topic: lesson.topics[0]
        })

    selectTopic = topic =>
        this.setState({
            topic: topic
        })


    render() {
        return (
            <div className="container-fluid">
                <h1>Course Editor: {this.state.course.title}</h1>
                <div className="row">
                    <div className="col-2" id="modules">
                        <ModuleList
                            selectModule={this.selectModule}
                            modules={this.state.course.modules}/>
                    </div>
                    <div className="col-10">
                        <LessonTabs
                            lessons={this.state.module.lessons}
                            selectLesson={this.selectLesson}
                        />
                        <TopicPills
                            topics={this.state.lesson.topics}
                            selectTopic={this.selectTopic}
                        />
                        <WidgetList
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseEditor