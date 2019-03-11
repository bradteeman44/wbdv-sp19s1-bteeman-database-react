import React from 'react'
import LessonTabsItem from "./LessonTabsItem";
import LessonService from "../services/LessonService";

class LessonTabs extends React.Component {
    constructor(props) {
        super(props)
        this.lessonService = new LessonService();
        this.state = {
            lesson: {
                title: 'New Lesson', topics: [{title: '', widgets: [{title: ''}]}]},
            lessons: this.props.lessons,
            updateLessonFld: ''
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
    }



    //componentWillReceiveProps(prevProps) {
    ///    if (this.props.lessons !== this.state.lessons) {
    //        console.log("updatelessonprops")
     //       this.findLessons();
     //   }
    //}

    componentDidUpdate() {
        if (this.props.lessons !== this.state.lessons) {
            console.log("updatelesson")
        }
    }

    createLesson = () => {
        this.lessonService.addLesson(this.props.module, this.state.lesson)
        this.setState({
            updateLessonFld: ''
        })
    }

    deleteLesson = lesson => {
        this.lessonService.deleteLesson(lesson);
    }

    findLessons = () => {
        this.lessonService.findAllLessons(this.props.module.id).then(lessons => {
            this.setState({
                lessons: lessons
            })});
    }

    updateLesson = lesson => {
        lesson.title = this.state.updateLessonFld;
        this.lessonService.updateLesson(lesson);
        this.setState({
            updateLessonFld: ''
        })
    }

    titleChanged = (event) => {
        this.setState(
            {
                lesson: {title: event.target.value, topics: [{}]},
                updateLessonFld: event.target.value
            });
    }

    render() {
        return (
            <ul className="nav nav-tabs"
                id="lessons">
                {
                    this.state.lessons.map((lesson) => {
                        if(lesson == null) {
                            return null
                        }
                            return (
                                <LessonTabsItem
                                    selectLesson={this.props.selectLesson}
                                    deleteLesson={this.deleteLesson}
                                    selectedLesson={this.props.selectedLesson}
                                    updateLesson={this.updateLesson}
                                    key={lesson.id}
                                    lesson={lesson}/>
                            )
                        }
                    )
                }
                <li
                    className="list-group-item"
                    id="lesson">
                    <input
                        onChange={this.titleChanged}
                        value={this.state.updateLessonFld}
                        placeholder="New Lesson"
                        className="form-control"/>
                    <button
                        onClick={this.createLesson}
                        className="btn btn-block"
                        value="ADDLESSON"
                        id="addLesson">
                        <i className="fa fa-plus"></i>
                    </button>
                </li>
            </ul>
        )
    }
}

export default LessonTabs