import React from 'react'
import LessonTabsItem from "./LessonTabsItem";
import TopicPillsItem from "./TopicPillsItem";

class TopicPills extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            topic: {id: '', title: ''},
            topics: this.props.topics
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createTopic = this.createTopic.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.topics !== prevProps.topics) {
            this.setState({topics: this.props.topics});
        }
    }

    createTopic = () => {
        this.setState(
            {
                topics: [
                    ...this.state.topics,
                    this.state.topic
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
                topic: {id: (Math.random() * 1000000000), title: event.target.value}
            });
    }

    render() {
        return (

            <ul className="nav nav-pills" id="topics">
                {
                    this.state.topics.map((topic) => {
                            return (
                                <TopicPillsItem
                                    selectTopic={this.props.selectTopic}
                                    //deleteLesson={this.deleteLesson()}
                                    key={topic.id}
                                    topic={topic}/>
                            )
                        }
                    )
                }
                <li className="list-group-item" id="topic">
                    <input
                        onChange={this.titleChanged}
                        className="form-control"/>
                    <button
                        onClick={this.createTopic}
                        className="btn btn-block"
                        value="ADDTOPIC"
                        id="addTopic">
                        <i className="fa fa-plus"></i>
                    </button>
                </li>
            </ul>


        )
    }
}

export default TopicPills