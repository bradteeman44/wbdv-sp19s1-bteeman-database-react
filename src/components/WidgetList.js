import React from 'react'
import WidgetComponent from './WidgetComponent'

const WidgetList = ({widgets, topicPrevious,  topicActual, newTopic, addWidget, deleteWidget, updateWidget, moveUp, moveDown, updateViewMode, viewMode}) => {
    if (topicPrevious !== undefined){
        if (topicActual.id !== topicPrevious.id){
            console.log("newTopic was called")
            newTopic(topicActual)
        }
    }
    return (
        <div id="widgetListAll">
            <div className="container-fluid" id="savePreviewBar">
                <div className="row justify-content-end">
                    <button className="btn btn-success" id="saveBtn">Save</button>
                    <div id="previewBtn">
                        Preview: <label> <input name="a" type="radio" checked onChange={() => {updateViewMode(viewMode)}}/> Yes
                    </label> <label> <input name="a" type="radio" /> No
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
/**
 <div id="widgetListAll">
 <div className="container-fluid" id="savePreviewBar">
 <div className="row justify-content-end">
 <button className="btn btn-success" id="saveBtn">Save</button>
 <div id="previewBtn">
 Preview: <label> <input name="a" type="radio"/> Yes
 </label> <label> <input name="a" type="radio" checked/> No
 </label>
 </div>
 </div>
 </div>
 <div className="container-fluid wbdv-heading-widget" id="widgetHeading">
 <div className="row">
 <div className="col-sm-4">
 <h3>Heading Widget</h3>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="arrowBtnUp">
 <i className="fa fa-arrow-up"></i>
 </button>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="arrowBtnDown">
 <i className="fa fa-arrow-down"></i>
 </button>
 </div>
 <div className="col-sm-2">
 <select className="form-control" id="role">
 <option value="HEADING">Heading</option>
 <option value="PARAGRAPH">Paragraph</option>
 <option value="LIST">List</option>
 <option value="IMAGE">Image</option>
 <option value="LINK">Link</option>
 </select>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="closeBtn">
 <i className="fa fa-times"></i>
 </button>
 </div>
 </div>
 <form>
 <div className="form-group row">
 <label></label> <input type="text"
 className="form-control wbdv-headingText-fld"
 id="headingTextFld"
 placeholder="Heading text"/>
 </div>
 <div className="form-group row">
 <label></label>
 <div className="col-sm-12" id="headingSize">
 <select className="form-control" id="headingSizeSel">
 <option>Choose size</option>
 <option value="HEADING 1">Heading 1</option>
 <option value="HEADING 2">Heading 2</option>
 <option value="HEADING 3">Heading 3</option>
 </select>
 </div>
 </div>
 <div className="form-group row">
 <label></label> <input type="text"
 className="form-control wbdv-widgetName-fld"
 id="widgetNameFld"
 placeholder="Widget name"/>
 </div>
 </form>
 <h4>Preview</h4>
 <div className="wbdv-preview-text">Heading text</div>
 </div>
 <div className="container-fluid wbdv-para-widget" id="widgetPara">
 <div className="row">
 <div className="col-sm-4">
 <h3>Paragraph Widget</h3>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="arrowBtnUp">
 <i className="fa fa-arrow-up"></i>
 </button>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="arrowBtnDown">
 <i className="fa fa-arrow-down"></i>
 </button>
 </div>
 <div className="col-sm-2">
 <select className="form-control" id="role">
 <option value="HEADING">Paragraph</option>
 <option value="PARAGRAPH">Heading</option>
 <option value="LIST">List</option>
 <option value="IMAGE">Image</option>
 <option value="LINK">Link</option>
 </select>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="closeBtn">
 <i className="fa fa-times"></i>
 </button>
 </div>
 </div>
 <form>
 <div className="form-group row">
 <label></label>
 <textarea id="paraTextFld" placeholder="Lorem ipsum" rows="5"
 cols="200">
 Lorem ipsum
 </textarea>
 </div>
 <div className="form-group row">
 <label></label> <input type="text"
 className="form-control wbdv-widgetName-fld"
 id="widgetNameFld"
 placeholder="Widget name"/>
 </div>
 </form>
 <h4>Preview</h4>
 <div className="wbdv-preview-text">Lorem ipsum</div>
 </div>
 <div className="container-fluid" id="widgetList">
 <div className="row">
 <div className="col-sm-4">
 <h3>List Widget</h3>
 </div>
 <div className="col-1-content-end">
 <button className="btn" id="arrowBtnUp">
 <i className="fa fa-arrow-up"></i>
 </button>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="arrowBtnDown">
 <i className="fa fa-arrow-down"></i>
 </button>
 </div>
 <div className="col-sm-2">
 <select className="form-control" id="role">
 <option value="HEADING">List</option>
 <option value="PARAGRAPH">Paragraph</option>
 <option value="LIST">Heading</option>
 <option value="IMAGE">Image</option>
 <option value="LINK">Link</option>
 </select>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="closeBtn">
 <i className="fa fa-times"></i>
 </button>
 </div>
 </div>
 <form>
 <div className="form-group row">
 <label></label>
 <textarea id="listTextFld" rows="5" cols="200">
 Put each
 Item in
 a separate row
 </textarea>
 </div>
 <div className="form-group row">
 <label></label>
 <div className="col-sm-12" id="listType">
 <select className="form-control" id="listTypeSel">
 <option value="UNORDERED">Unordered list</option>
 <option value="ORDERED">Ordered list</option>
 </select>
 </div>
 </div>
 <div className="form-group row">
 <label></label> <input type="text"
 className="form-control wbdv-widgetName-fld"
 id="widgetNameFld"
 placeholder="Widget name"/>
 </div>
 </form>
 <h4>Preview</h4>
 <div className="wbdv-preview-text">
 <ul>
 <li>Put each</li>
 <li>Item in</li>
 <li>a seperate row</li>
 </ul>
 </div>
 </div>
 <div className="container-fluid" id="widgetImg">
 <div className="row">
 <div className="col-sm-4">
 <h3>Image Widget</h3>
 </div>
 <div className="col-1-content-end">
 <button className="btn" id="arrowBtnUp">
 <i className="fa fa-arrow-up"></i>
 </button>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="arrowBtnDown">
 <i className="fa fa-arrow-down"></i>
 </button>
 </div>
 <div className="col-sm-2">
 <select className="form-control" id="role">
 <option value="HEADING">Image</option>
 <option value="PARAGRAPH">Paragraph</option>
 <option value="LIST">List</option>
 <option value="IMAGE">Heading</option>
 <option value="LINK">Link</option>
 </select>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="closeBtn">
 <i className="fa fa-times"></i>
 </button>
 </div>
 </div>
 <form>
 <div className="form-group row">
 <label></label> <input type="url"
 className="form-control wbdv-inmageURL-fld" id="imageURLFld"
 placeholder="Image URL"/>
 </div>
 <div className="form-group row">
 <label></label> <input type="text"
 className="form-control wbdv-widgetName-fld"
 id="widgetNameFld"
 placeholder="Widget name"/>
 </div>
 </form>
 <h4>Preview</h4>
 <div className="wbdv-preview-img">
 <img height="200px" width="400px" alt="Image"
 src="http://scd.france24.com/en/files/imagecache/france24_ct_api_bigger_169/article/image/BOLT-M_1.jpg">
 </img>
 </div>
 </div>
 <div className="container-fluid" id="widgetLink">
 <div className="row">
 <div className="col-sm-4">
 <h3>Link Widget</h3>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="arrowBtnUp">
 <i className="fa fa-arrow-up"></i>
 </button>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="arrowBtnDown">
 <i className="fa fa-arrow-down"></i>
 </button>
 </div>
 <div className="col-sm-2">
 <select className="form-control" id="role">
 <option value="HEADING">Link</option>
 <option value="PARAGRAPH">Paragraph</option>
 <option value="LIST">List</option>
 <option value="IMAGE">Image</option>
 <option value="LINK">Heading</option>
 </select>
 </div>
 <div className="col-sm-1-content-end">
 <button className="btn" id="closeBtn">
 <i className="fa fa-times"></i>
 </button>
 </div>
 </div>
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
 </div>
 <button className="btn btn-danger btn-circle shadow float-right"
 value="ADDWIDGETBTN" id="addWidgetBtn">
 <i className="fa fa-plus"></i>
 </button>
 </div>*/
