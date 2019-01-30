import React from 'react'
import LessonTabsItem from "./LessonTabsItem";

class LessonTabs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lesson: {title: 'New Lesson', topics: [{}]},
            lessons: this.props.lessons
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
            lessons: this.props.courseService.addLesson(this.props.module, this.state.lesson)
        })

    deleteLesson = lesson =>
        this.setState({
            lessons: this.props.courseService.deleteLesson(this.props.module, lesson)
        })

    titleChanged = (event) => {
        this.setState(
            {
                lesson: {title: event.target.value, topics: [{}]}
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
                        value={this.state.lesson.title}
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