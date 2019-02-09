import React from 'react'
import LessonTabsItem from "./LessonTabsItem";

class LessonTabs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lesson: {title: 'New Lesson', topics: [{widgets: [{}]}]},
            lessons: this.props.lessons,
            updateLessonFld: ''
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.lessons !== prevProps.lessons) {
            this.setState({lessons: this.props.lessons});
        }
    }

    createLesson = () =>
        this.setState({
            lessons: this.props.courseService.addLesson(this.props.module, this.state.lesson),
            updateLessonFld: ''
        })

    deleteLesson = lesson =>
        this.setState({
            lessons: this.props.courseService.deleteLesson(this.props.module, lesson)
        })

    updateLesson = lesson =>
        this.setState({
            modules: this.props.courseService.updateLesson(this.props.module, lesson, this.state.updateLessonFld),
            updateLessonFld: ''
        })

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