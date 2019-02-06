import React from 'react'

const ImageWidget = ({widget, updateWidget}) =>
    <div>
        <h3>Image Widget</h3>
        <input type="url"
               value={widget.url}
               onChange={event => {
                   widget.url = event.target.value
                   updateWidget(widget)
               }}
               className="form-control wbdv-inmageURL-fld"
               id="imageURLFld"
               placeholder="Image URL"/>
        <input type="text"
               className="form-control wbdv-widgetName-fld"
               id="widgetNameFld"
               placeholder="Widget name"/>
        <h4>Preview</h4>
        <div className="wbdv-preview-img">
            <img alt="Image"
                src={widget.url}>
            </img>
        </div>
    </div>

export default ImageWidget