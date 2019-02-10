import React from 'react'
import WidgetComponent from './WidgetComponent'

const WidgetList = ({loadWidgets, widgets, topicPrevious, topicActual, addWidget, deleteWidget, updateWidget, moveUp, moveDown, updateViewMode, saveWidgets, viewMode}) => {
    console.log(widgets)
    if (topicPrevious !== undefined) {
        if (topicActual.id !== topicPrevious.id) {
            loadWidgets(topicActual)
        }
    }
    return (
        <div id="widgetListAll">
            <div className="container-fluid" id="savePreviewBar">
                <div className="row justify-content-end">
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            saveWidgets(widgets)
                            console.log(widgets)
                        }}
                        id="saveBtn">
                        Save
                    </button>
                    <div id="previewBtn">
                        Preview:
                        <label>
                            <input
                                name="a"
                                type="radio"
                                value="PREVIEW"
                                onClick={(event) => {
                                    console.log("function called")
                                    viewMode = event.target.value
                                    console.log(viewMode)
                                    updateViewMode(viewMode)
                                }}/>
                            Yes
                        </label>
                        <label>
                            <input
                                name="a"
                                type="radio"
                                value="EDIT"
                                onClick={(event) => {
                                    console.log("function called")
                                    viewMode = event.target.value
                                    console.log(viewMode)
                                    updateViewMode(viewMode)
                                }}/>
                            No
                        </label>
                    </div>
                </div>
            </div>
            <div className="list-group">
                {
                    widgets.map(widget =>
                        <WidgetComponent
                            key={widget.id}
                            updateWidget={updateWidget}
                            deleteWidget={deleteWidget}
                            viewMode={viewMode}
                            moveUp={moveUp}
                            moveDown={moveDown}
                            widget={widget}/>
                    )
                }
                <button
                    className="btn btn-primary"
                    value="ADDWIDGETBTN"
                    id="addWidgetBtn"
                    onClick={addWidget}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    )
}

export default WidgetList
