import CourseService from "../services/CourseService";

const widgetReducer = (state = {widgets: [], topic: '', viewMode: 'EDIT'}, action) => {
    const service = new CourseService();

    switch (action.type) {
        case 'LOAD_WIDGETS':
            console.log(state)
            return {
                topic: action.topic,
                widgets: service.findWidgets(action.topic),
                viewMode: state.viewMode
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    service.createWidget(state.topic)
                ],
                topic: state.topic,
                viewMode: state.viewMode
            }
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id),
                topic: state.topic,
                viewMode: state.viewMode
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget),
                topic: state.topic,
                viewMode: state.viewMode
            }
        case 'SAVE_WIDGETS':
            return {
                widgets: service.saveWidgets(state.topic, action.widgets),
                topic: state.topic,
                viewMode: state.viewMode
            }
        case 'MOVE_UP':
            Array.prototype.move
                = function (from, to) {
                this.splice(to, 0, this.splice(from, 1)[0]);
            };
            let indexUp = state.widgets.indexOf(action.widget);
            console.log(indexUp)
            state.widgets.move(indexUp, indexUp - 1);
            return {
                widgets: state.widgets.splice(0),
                topic: state.topic,
                viewMode: state.viewMode
            }
        case 'MOVE_DOWN':
            Array.prototype.move
                = function (from, to) {
                this.splice(to, 0, this.splice(from, 1)[0]);
            };
            let indexDown = state.widgets.indexOf(action.widget);
            console.log(indexDown)
            state.widgets.move(indexDown, indexDown - 1);
            return {
                widgets: state.widgets.splice(0),
                topic: state.topic,
                viewMode: state.viewMode
            }
        case 'UPDATE_VIEW_MODE':
            console.log(state);
            return {
                widgets: state.widgets,
                topic: state.topic,
                viewMode: action.viewMode
            }
        case 'FIND_WIDGET':
            return {
                widgets: service.findWidget(action.widget.id),
                topic: state.topic,
                viewMode: state.viewMode
            }
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return {
                widgets: service.findWidgets(state.topic),
                topic: state.topic,
                viewMode: state.viewMode
            }
        case 'FIND_ALL_WIDGETS':
            return {
                widgets: service.findAllWidgets,
                topic: state.topic,
                viewMode: state.viewMode
            }
        default:
            return state;
    }
}

export default widgetReducer;