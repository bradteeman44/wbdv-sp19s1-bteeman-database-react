import React from 'react'
import CourseService from "../services/CourseService"
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseEditorStyle from "../styling/CourseEditorStyle.css"
import widgetReducer from '../reducers/WidgetReducer'
import {Link} from 'react-router-dom'
import WidgetListContainer from "./WidgetListContainer";
import {createStore} from 'redux'
import {Provider} from "react-redux";

const store = createStore(widgetReducer);

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        //let courseId = parseInt(props.match.params.id);
        let course = this.componentDidMount();
        this.state = {
            courseId: '',
            course: course,
            selectedModule: course.modules[0],
            selectedLesson: course.modules[0].lessons[0],
            selectedTopic:  course.modules[0].lessons[0].topics[0],
            updateCourseFld: ''
        }
    }

    componentDidMount() {
        console.log(parseInt(this.props.match.params.id));
        this.selectCourse(parseInt(this.props.match.params.id))
        /*
        this.courseService.findCourseById(parseInt(this.props.match.params.id))
            .then(course =>
                this.setState({course: course}));
                */
    }

    selectCourse = courseId => {
        console.log(courseId);
        this.setState({courseId: courseId});
    }



    updateCourse = course =>
        this.setState({
            courses: this.courseService.updateCourse(course, this.state.updateCourseFld),
            updateCourseFld: ''
        })

    titleChanged = (event) =>
        this.setState(
            {
                updateCourseFld: event.target.value
            });

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
                        className="btn-lg float-left btn-dark"
                        to={`/table`}><i className="fa fa-list"></i></Link>
                    Course Editor: {this.state.course.title}
                    <span className="float-right">
                    <input
                        className="form-control"
                        type="text"
                        id="editCourseTitleFld"
                        placeholder="Edit Course Title"
                        value={this.state.updateCourseFld}
                        onChange={this.titleChanged}/>
                    <button
                        id="courseEditBtn"
                        className="btn-lg float-left btn-primary btn-block"
                        onClick={() => this.updateCourse(this.state.course)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    </span>
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
                        <Provider store={store}>
                            <WidgetListContainer
                                topic={this.state.selectedTopic}/>
                        </Provider>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditor