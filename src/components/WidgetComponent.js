import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'

const WidgetComponent = ({widget, deleteWidget, updateWidget}) =>
    <div className="container-fluid wbdv-widget" id="widgetComponent">
        <div className="row">
            <div className="col-sm-4">
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
                <select
                    onChange={(event) => {
                        widget.type = event.target.value
                        updateWidget(widget)
                    }}
                    className="form-control"
                    value={widget.type}
                    id="role">
                    <option value="HEADING">Heading</option>
                    <option value="IMAGE">Image</option>
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
            widget.type === 'HEADING' &&
            <HeadingWidget
                updateWidget={updateWidget}
                widget={widget}/> ||
            widget.type === 'IMAGE' &&
            <ImageWidget
                updateWidget={updateWidget}
                widget={widget}/>
        }
    </div>


export default WidgetComponent