import React from 'react'
import TopicPillsItem from "./TopicPillsItem";
import TopicService from "../services/TopicService";

class TopicPills extends React.Component {
    constructor(props) {
        super(props)
        this.topicService = new TopicService()
        this.state = {
            topic: {title: 'New Topic', widgets: [{}]},
            prevTopics: this.props.topics,
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
        if (this.state.prevTopics !== this.state.topics) {
            console.log("updateTopics")
            this.findTopics()
        } else if (this.props.lesson !== prevProps.lesson) {
            console.log("updateTopicsBasedOn Lesson")
            this.findTopics()
        }
    }

    createTopic = () => {
        this.topicService.addTopic(this.props.lesson, this.state.topic);
        this.topicService.findAllTopics(this.props.lesson).then(topics => {
            this.setState({
                topics: topics
            })});
        this.setState({
            updateTopicFld: ''
        })
    };

    deleteTopic = topic => {
        this.topicService.deleteTopic(topic);
        this.topicService.findAllTopics(this.props.lesson).then(topics => {
            this.setState({
                topics: topics
            })
        });
    };

    findTopics = () => {
        this.topicService.findAllTopics(this.props.lesson).then(topics => {
            this.setState({
                prevTopics: topics,
                topics: topics
            })});
    }

    updateTopic = topic => {
        topic.title = this.state.updateTopicFld;
        this.topicService.updateTopic(topic);
        this.setState({
            updateTopicFld: ''
        })
        this.topicService.findAllTopics(this.props.lesson).then(topics => {
            this.setState({
                topics: topics
            })
        });
    }

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