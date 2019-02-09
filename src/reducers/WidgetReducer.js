import CourseService from "../services/CourseService";

const widgetReducer = (state = {widgets: [], topic:'', viewMode: 'EDIT'}, action) => {
    const service = new CourseService();

    switch (action.type) {
        case 'NEW_TOPIC':
            console.log(state)
            return{
                topic: action.topic,
                widgets: service.findWidgets(action.topic),
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: (new Date()).getTime(),
                        type: 'HEADING',
                        text: 'New Widget',
                        size: 1
                    }
                ]
            }
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'MOVE_UP':
            let index = state.indexOf(action.widget);
            state.move(index, index - 1);
            return state.splice(0);
        case 'MOVE_DOWN':
            return
        case 'UPDATE_VIEW_MODE':
            if(action.viewMode === 'EDIT') {
                return {viewMode: 'PREVIEW'}
            } else {
                return {viewMode: 'EDIT'}
            }
        case 'FIND_WIDGET':
            return
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return
        case 'FIND_ALL_WIDGETS':
            return
        default:
            return state;
    }

}

export default widgetReducer;