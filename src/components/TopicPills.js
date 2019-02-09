import React from 'react'
import TopicPillsItem from "./TopicPillsItem";

class TopicPills extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            topic: {title: 'New Topic', widgets: [{}]},
            topics: this.props.topics,
            updateTopicFld: ''
        };

        if(this.props.topics == null) {
            this.createTopic()
        }

        this.titleChanged = this.titleChanged.bind(this);
        this.createTopic = this.createTopic.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.topics !== prevProps.topics) {
            this.setState({topics: this.props.topics});
        }
    }

    createTopic = () =>
        this.setState({
            topics: this.props.courseService.addTopic(this.props.lesson, this.state.topic),
            updateTopicFld: ''
        })

    deleteTopic = topic =>
        this.setState({
            topics: this.props.courseService.deleteTopic(this.props.lesson, topic)
        })

    updateTopic = topic =>
        this.setState({
            topics: this.props.courseService.updateTopic(this.props.lesson, topic, this.state.updateTopicFld),
            updateTopicFld: ''
        })

    titleChanged = (event) => {
        this.setState(
            {
                topic: {title: event.target.value},
                updateTopicFld: event.target.value
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
                                    deleteTopic={this.deleteTopic}
                                    selectedTopic={this.props.selectedTopic}
                                    updateTopic={this.updateTopic}
                                    key={topic.id}
                                    topic={topic}/>
                            )
                        }
                    )
                }
                <li
                    className="list-group-item"
                    id="topic">
                    <input
                        type="text"
                        onChange={this.titleChanged}
                        value={this.state.updateTopicFld}
                        placeholder="New Topic"
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