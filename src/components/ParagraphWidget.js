import React from 'react'

const ParagraphWidget = ({widget, viewMode, updateWidget}) => {
    console.log(viewMode);
    if (viewMode === 'EDIT') {
        widget.editing = true
    } else {
        widget.editing = false
    }
    return (
        <div>
            <h3
                style={{display: widget.editing ? 'block' : 'none'}}>
                Paragraph Widget
            </h3>
            <textarea
                style={{display: widget.editing ? 'block' : 'none'}}
                value={widget.text}
                onChange={event => {
                    widget.text = event.target.value
                    updateWidget(widget)
                }}
                className="form-control"
                id="paraTextFld"
                placeholder="Lorem ipsum"
                rows="5"
                cols="200">
        </textarea>
            <input type="text"
                   style={{display: widget.editing ? 'block' : 'none'}}
                   className="form-control wbdv-widgetName-fld"
                   id="widgetNameFld"
                   placeholder="Widget name"
                   value={widget.title}
                   onChange={event => {
                       widget.title = event.target.value
                       updateWidget(widget)
                   }}/>
            <h4
                id="previewText"
                style={{display: widget.editing ? 'block' : 'none'}}>
                Preview
            </h4>
            <textarea
                className="form-control"
                value={widget.text}
                id="paraTextFld"
                rows="5"
                cols="200">
        </textarea>
        </div>
    )
}

export default ParagraphWidget;

