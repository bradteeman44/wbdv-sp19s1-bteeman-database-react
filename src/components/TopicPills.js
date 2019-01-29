import React from 'react'
import TopicPillsItem from "./TopicPillsItem";

class TopicPills extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            topic: {id: (new Date()).getTime(), title: 'New Topic'},
            topics: this.props.topics
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

    filterTopics = topicToDelete =>
        this.state.topics.slice().filter(
            topic => topic.id !== topicToDelete.id
        )


    deleteTopic = topicToDelete =>
        this.setState({
            topics: this.filterTopics(topicToDelete)
        })


    titleChanged = (event) => {
        this.setState(
            {
                topic: {id: (new Date()).getTime(), title: event.target.value}
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
                                    key={topic.id}
                                    topic={topic}/>
                            )
                        }
                    )
                }
                <li className="list-group-item" id="topic">
                    <input
                        onChange={this.titleChanged}
                        value={this.state.topic.title}
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