import React from 'react'
import LessonTabsItem from "./LessonTabsItem";

class LessonTabs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lesson: {id: '', title: ''},
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

    /*filterLessons = lessonToDelete =>
        this.state.lessons.slice().filter(
            lesson => lesson.id !== lessonToDelete.id
        )


    deleteLesson = lessonToDelete =>
        this.setState({
            lessons: this.filterLessons(lessonToDelete)
        })*/


    titleChanged = (event) => {
        this.setState(
            {
                lesson: {id: (Math.random() * 1000000000), title: event.target.value}
            });
    }

    render() {
        return (

            <ul className="nav nav-tabs" id="lessons">
                {
                    this.state.lessons.map((lesson) => {
                            return (
                                <LessonTabsItem
                                    selectLesson={this.props.selectLesson}
                                    //deleteLesson={this.deleteLesson()}
                                    key={lesson.id}
                                    lesson={lesson}/>
                            )
                        }
                    )
                }
                <li className="list-group-item" id="lesson">
                    <input
                        onChange={this.titleChanged}
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