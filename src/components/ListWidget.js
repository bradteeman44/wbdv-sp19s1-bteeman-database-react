import React from 'react'

const ListWidget = ({widget, viewMode, updateWidget}) => {
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
                List Widget
            </h3>
            <textarea
                style={{display: widget.editing ? 'block' : 'none'}}
                value={widget.text}
                onChange={event => {
                    widget.text = event.target.value
                    updateWidget(widget)
                }}
                className="form-control"
                id="listTextFld"
                placeholder="Put each
            item in
            a separate row"
                rows="5"
                cols="200">
        </textarea>
            <select
                style={{display: widget.editing ? 'block' : 'none'}}
                onChange={event => {
                    widget.list = event.target.value
                    updateWidget(widget)
                }}
                className="form-control"
                id="listTypeSel">
                <option value="UNORDERED">Unordered list</option>
                <option value="ORDERED">Ordered list</option>
            </select>
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
                d="previewText"
                style={{display: widget.editing ? 'block' : 'none'}}>
                Preview
            </h4>
            {
                widget.list === 'UNORDERED' &&
                <ul>
                    {widget.text}
                </ul> ||
                widget.list === 'ORDERED' &&
                <ol>
                    {widget.text}
                </ol>
            }
        </div>
    )
}

export default ListWidget
