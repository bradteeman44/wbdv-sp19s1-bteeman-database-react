import React from 'react'

const TopicPillsItem = ({topic, selectTopic, deleteTopic}) =>
    <li id="topic" onClick={() => selectTopic(topic)} className="nav-item">
        <h6>{topic.title}</h6>
        <span className="float-right" id="topicBtns">
            <button className="btn-outline-danger" onClick={() => deleteTopic(topic)}>
                <i className="fa fa-trash"></i>
            </button>
            <button className="btn-outline-primary">
                <i className="fa fa-pencil"></i>
            </button>
       </span>
    </li>


export default TopicPillsItem;