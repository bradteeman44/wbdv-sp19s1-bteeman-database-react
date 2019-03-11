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
import ModuleService from "../services/ModuleService";

const store = createStore(widgetReducer);

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.moduleService = new ModuleService();
        this.state = {
            courseId: '',
            prevCourse: [],
            course: {
                title: 'New Course', modules: [{
                    title: '', lessons: [{title: '', topics: [{title: '', widgets: [{title: ''}]}]}]
                }]
            },
            selectedModule: {
                title: '', lessons: [{title: '', topics: [{title: '', widgets: [{title: ''}]}]}]
                },
            selectedLesson: {
                title: '', topics: [{title: '', widgets: [{title: ''}]}]},
            selectedTopic:  {
                title: 'New Course', widgets: [{title: ''}]},
            updateCourseFld: ''
        }
    }

    componentDidMount() {
        this.selectCourse(parseInt(this.props.match.params.id))
        this.findCourse(parseInt(this.props.match.params.id))
    }

    componentDidUpdate(prevState) {

        console.log(this.state.course)
        console.log(this.state.prevCourse)
        if (this.state.course !== this.state.prevCourse) {
            console.log("update course")
            this.findCourse(this.state.courseId);
        }
    }

    selectCourse = courseId => {
        this.setState({courseId: courseId});
    }

    findCourse = courseId => {
        this.courseService.findCourseById(courseId)
            .then(course => {
                this.setState({
                    prevCourse: course,
                    course: course
                })});
    };

    updateCourse = course => {
        course.title = this.state.updateCourseFld;
        this.courseService.updateCourse(course);
        this.setState({
            updateCourseFld: ''
        })
    }

    titleChanged = (event) =>
        this.setState(
            {
                updateCourseFld: event.target.value
            });

    createModule = (module) => {
        this.moduleService.addModule(this.state.courseId, module)
        this.courseService.findCourseById(this.state.courseId)
            .then(course => {
                this.setState({
                    course: course
                })});
        console.log(module);
    }

    deleteModule = module => {
        this.moduleService.deleteModule(module);
        this.courseService.findCourseById(this.state.courseId)
            .then(course => {
                this.setState({
                    course: course
                })});
    }

    selectModule = module => {
        console.log(module)
        console.log(module.lessons[0])
        this.setState({
            selectedModule: module,
        })
    }

    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson
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
                            deleteModule={this.deleteModule}
                            createModule={this.createModule}
                            modules={this.state.course.modules}
                            courseId={this.props.match.params.id}
                        />
                    </div>
                    <div
                        className="col-10">

                        <LessonTabs
                            lessons={this.state.selectedModule.lessons}
                            module={this.state.selectedModule}
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}/>
                        <TopicPills
                            topics={this.state.selectedLesson.topics}
                            lesson={this.state.selectedLesson}
                            selectTopic={this.selectTopic}
                            selectedTopic={this.state.selectedTopic}/>
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