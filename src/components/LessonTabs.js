import React from 'react'
import LessonTabsItem from "./LessonTabsItem";

class LessonTabs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lesson: {id: (new Date()).getTime(), title: 'New Lesson', topics: [{}]},
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

    createLesson = () => {
        this.setState(
            {
                lessons: [
                    ...this.state.lessons,
                    this.state.lesson
                ]
            }
        )
    }

    filterLessons = lessonToDelete =>
        this.state.lessons.slice().filter(
            lesson => lesson.id !== lessonToDelete.id
        )


    deleteLesson = lessonToDelete => {
        this.setState({
            lessons: this.filterLessons(lessonToDelete)
        })
    }


    titleChanged = (event) => {
        this.setState(
            {
                lesson: {id: (new Date()).getTime(), title: event.target.value, topics: [{}]}
            });
    }

    render() {
        return (

            <ul className="nav nav-tabs" id="lessons">
                {
                    this.state.lessons.map((lesson) => {
                        if(lesson == null) {
                            return null
                        }
                            return (
                                <LessonTabsItem
                                    selectLesson={this.props.selectLesson}
                                    deleteLesson={this.deleteLesson}
                                    key={lesson.id}
                                    lesson={lesson}/>
                            )
                        }
                    )
                }
                <li className="list-group-item" id="lesson">
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