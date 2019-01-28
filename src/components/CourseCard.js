import React from 'react'

const CourseCard = (course) => {
    return (
        <div className="card">
            <img className="card-img-top"
                 src="https://picsum.photos/300/200"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Card text.</p>
                <button className="btn btn-primary">More...</button>
            </div>
        </div>
    )
}

export default CourseCard