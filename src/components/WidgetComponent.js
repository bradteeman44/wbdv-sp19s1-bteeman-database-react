import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";

const WidgetComponent = ({widget, viewMode, deleteWidget, updateWidget, moveUp, moveDown}) => {
    console.log(viewMode);
    const view = viewMode === 'EDIT';
    return (
        <div className="container-fluid wbdv-widget"
             id="widgetComponent">
            <div className="row"
                 style={{display: view ? '' : 'none'}}>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-1-content-end">
                    <button
                        className="btn"
                        id="arrowBtnUp"
                        onClick={() => {
                            moveUp(widget)
                        }}>
                        <i className="fa fa-arrow-up"></i>
                    </button>
                </div>
                <div className="col-sm-1-content-end">
                    <button
                        className="btn"
                        id="arrowBtnDown"
                        onClick={() => {
                            moveDown(widget)
                        }}>
                        <i className="fa fa-arrow-down"></i>
                    </button>
                </div>
                <div className="col-sm-2">
                    <select
                        onChange={(event) => {
                            widget.wtype = event.target.value
                            updateWidget(widget)
                        }}
                        className="form-control"
                        value={widget.wtype}
                        id="role">
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                        <option value="LINK">Link</option>
                    </select>
                </div>
                <div className="col-sm-1-content-end">
                    <button
                        className="btn" id="closeBtn"
                        onClick={() => deleteWidget(widget)}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </div>
            {
                widget.wtype === 'HEADING' &&
                <HeadingWidget
                    updateWidget={updateWidget}
                    widget={widget}
                    viewMode={viewMode}/> ||
                widget.wtype === 'IMAGE' &&
                <ImageWidget
                    updateWidget={updateWidget}
                    widget={widget}
                    viewMode={viewMode}/> ||
                widget.wtype === 'PARAGRAPH' &&
                <ParagraphWidget
                    updateWidget={updateWidget}
                    widget={widget}
                    viewMode={viewMode}/> ||
                widget.wtype === 'LIST' &&
                <ListWidget
                    updateWidget={updateWidget}
                    widget={widget}
                    viewMode={viewMode}/> ||
                widget.wtype === 'LINK' &&
                <LinkWidget
                    updateWidget={updateWidget}
                    widget={widget}
                    viewMode={viewMode}/>
            }
        </div>
    )
}


export default WidgetComponent