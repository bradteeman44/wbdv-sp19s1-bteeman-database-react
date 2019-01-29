import React from 'react'

const LessonTabsItem = ({lesson, selectLesson}) =>
    <li id="lesson" onClick={() => selectLesson(lesson)} className="nav-item">
        <h6>{lesson.title}</h6>
        <span className="float-right" id="lessonBtns">
            <button>
                <i className="fa fa-trash"></i>
            </button>
            <button>
                <i className="fa fa-pencil"></i>
            </button>
       </span>
    </li>


export default LessonTabsItem;