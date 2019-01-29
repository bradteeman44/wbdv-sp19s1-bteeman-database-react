import React from 'react'

const LessonTabsItem = ({lesson, selectLesson, deleteLesson}) =>
    <li id="lesson" onClick={() => selectLesson(lesson)} className="nav-item">
        <h6>{lesson.title}</h6>
        <span className="float-right" id="lessonBtns">
            <button className="btn-outline-danger" onClick={() => deleteLesson(lesson)}>
                <i className="fa fa-trash"></i>
            </button>
            <button className="btn-outline-primary">
                <i className="fa fa-pencil"></i>
            </button>
       </span>
    </li>


export default LessonTabsItem;