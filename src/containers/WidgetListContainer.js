import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = (state, ownProps) => ({
    widgets: state.widgets,
    topicActual: ownProps.topic,
    topicPrevious: state.topic,
    viewMode: state.viewMode
})

const dispatchToPropertyMapper = dispatch => ({
    loadWidgets: (topic) =>
        dispatch({
            type: 'LOAD_WIDGETS',
            topic: topic
        }),
    moveUp: (widget) =>
        dispatch({
            type: 'MOVE_UP',
            widget: widget
        }),
    moveDown: (widget) =>
        dispatch({
            type: 'MOVE_DOWN',
            widget: widget
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
    updateViewMode: (viewMode) =>
        dispatch({
            type: 'UPDATE_VIEW_MODE',
            viewMode: viewMode
        }),
    saveWidgets: (widgets) =>
        dispatch({
            type: 'SAVE_WIDGETS',
            widgets: widgets
        }),
    findWidget: (widget) =>
        dispatch({
            type: 'FIND_WIDGET',
            widget: widget
        }),
    findAllWidgets: () =>
        dispatch({
            type: 'FIND_ALL_WIDGETS'
        }),
    findAllWidgetsForTopic: (widgets) =>
        dispatch({
            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
            widgets: widgets
        })
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer