import React from 'react'

const ListWidget = ({widget, updateWidget}) =>
    <div>
        <h3>List Widget</h3>
        <textarea
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
               className="form-control wbdv-widgetName-fld"
               id="widgetNameFld"
               placeholder="Widget name"
               value={widget.title}
               onChange={event => {
                   widget.title = event.target.value
                   updateWidget(widget)
               }}/>
        <h4 id="previewText">Preview</h4>
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

export default ListWidget
