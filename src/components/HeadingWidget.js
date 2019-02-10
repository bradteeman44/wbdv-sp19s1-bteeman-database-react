import React from 'react'

const HeadingWidget = ({widget, viewMode, updateWidget}) => {
    console.log(viewMode);
    widget.editing = viewMode === 'EDIT';
    return (
        <div>
            <h3
                style={{display: widget.editing ? 'block' : 'none'}}>
                Heading Widget
            </h3>
            <input
                style={{display: widget.editing ? 'block' : 'none'}}
                value={widget.text}
                onChange={event => {
                    widget.text = event.target.value
                    updateWidget(widget)
                }}
                className="form-control"
                id="headingTextFld"
                placeholder="Heading text"/>
            <select
                style={{display: widget.editing ? 'block' : 'none'}}
                onChange={event => {
                    widget.size = parseInt(event.target.value)
                    updateWidget(widget)
                }}
                className="form-control"
                id="headingSize">
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
                <option value="4">Heading 4</option>
                <option value="5">Heading 5</option>
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
            <h4 id="previewText"
                style={{display: widget.editing ? 'block' : 'none'}}>
                Preview
            </h4>
            {
                widget.size === 1 && <h1>{widget.text}</h1> ||
                widget.size === 2 && <h2>{widget.text}</h2> ||
                widget.size === 3 && <h3>{widget.text}</h3> ||
                widget.size === 4 && <h4>{widget.text}</h4> ||
                widget.size === 5 && <h5>{widget.text}</h5>
            }
        </div>
    )
}

export default HeadingWidget