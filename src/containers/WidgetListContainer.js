import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const Widgets = ({widgets, loadWidgets}) => {
    loadWidgets(widgets)
}

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const dispatchToPropertyMapper = dispatch => ({
    loadWidgets: widgets =>
        dispatch({
            type: 'LOAD_WIDGETS',
            widgets: widgets
        }),
    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),
    addWidget: () =>
        dispatch({
            type: 'CREATE_WIDGET'
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer