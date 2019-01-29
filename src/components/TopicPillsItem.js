import React from 'react'

const TopicPillsItem = ({topic, selectTopic}) =>
    <li id="topic" onClick={() => selectTopic(topic)} className="nav-item">
        <h6>{topic.title}</h6>
        <span className="float-right" id="topicBtns">
            <button>
                <i className="fa fa-trash"></i>
            </button>
            <button>
                <i className="fa fa-pencil"></i>
            </button>
       </span>
    </li>


export default TopicPillsItem;