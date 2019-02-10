import React from 'react'

const ImageWidget = ({widget, viewMode, updateWidget}) => {
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
                Image Widget
            </h3>
            <input type="url"
                   style={{display: widget.editing ? 'block' : 'none'}}
                   value={widget.url}
                   onChange={event => {
                       widget.url = event.target.value
                       updateWidget(widget)
                   }}
                   className="form-control wbdv-inmageURL-fld"
                   id="imageURLFld"
                   placeholder="Image URL"/>
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
            <div className="wbdv-preview-img">
                <img alt="Image"
                     src={widget.url}>
                </img>
            </div>
        </div>

    )
}

export default ImageWidget