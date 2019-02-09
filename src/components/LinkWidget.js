import React from 'react'

const LinkWidget = ({widget, updateWidget}) =>
    <div>
        <h3>Link Widget</h3>
        <input type="url"
               value={widget.url}
               onChange={event => {
                   widget.url = event.target.value
                   updateWidget(widget)
               }}
               className="form-control wbdv-linkURL-fld"
               id="linkURLFld"
               placeholder="Link URL"/>
        <input type="text"
               className="form-control wbdv-linkText-fld"
               id="linkTextFld"
               placeholder="Link text"
               value={widget.text}
               onChange={event => {
                   widget.text = event.target.value
                   updateWidget(widget)
               }}/>
        <input type="url"
               className="form-control wbdv-linkURL2-fld"
               id="linkURL2Fld"
               placeholder="Link URL"
               value={widget.url}/>
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
        <a
            href={widget.url}
            className="wbdv-preview-link">
            {widget.text}
        </a>
    </div>

export default LinkWidget
/**
<form>
<div className="form-group row">
    <label></label> <input type="url"
className="form-control wbdv-linkURL-fld" id="linkURLFld"
placeholder="Link URL"/>
    </div>
<div className="form-group row">
    <label></label> <input type="text"
                           className="form-control wbdv-linkText-fld" id="linkTextFld"
                           placeholder="Link text"/>
</div>
<div className="form-group row">
    <label></label> <input type="url"
className="form-control wbdv-linkURL2-fld" id="linkURL2Fld"
placeholder="Link URL"/>
    </div>
<div className="form-group row">
    <label></label> <input type="text"
                           className="form-control wbdv-widgetName-fld"
                           id="widgetNameFld"
                           placeholder="Widget name"/>
</div>
</form>
<h4>Preview</h4>
<div>
<a href="#" className="wbdv-preview-link">Link text</a>
</div>
</div>*/