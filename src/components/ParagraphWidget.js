import React from 'react'

const ParagraphWidget = ({widget, updateWidget}) =>
    <div>
        <h3>Paragraph Widget</h3>
        <textarea
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
               className="form-control wbdv-widgetName-fld"
               id="widgetNameFld"
               placeholder="Widget name"
               value={widget.title}
               onChange={event => {
                       widget.title = event.target.value
                       updateWidget(widget)
               }}/>
        <h4 id="previewText">Preview</h4>
        <textarea
            className="form-control"
            value={widget.text}
            id="paraTextFld"
            rows="5"
            cols="200">
        </textarea>
    </div>

export default ParagraphWidget;

