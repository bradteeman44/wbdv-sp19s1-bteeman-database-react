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
    newTopic: (topic) =>
        dispatch({
            type: 'NEW_TOPIC',
            topic: topic
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
    updateViewMode: viewMode =>
        dispatch({
            type: 'UPDATE_VIEW_MODE',
            viewMode: viewMode
        })
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer