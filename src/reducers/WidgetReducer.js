const widgets =
    {
        widgets: [
            {
                id: 123,
                title: 'Widget 1',
                type: 'HEADING',
                text: 'This is a heading',
                size: 2
            },
            {
                id: 234,
                title: 'Widget 2',
                type: 'IMAGE',
                url: 'http://scd.france24.com/en/files/imagecache/france24_ct_api_bigger_169/article/image/BOLT-M_1.jpg'
            }
        ]
    }

const widgetReducer = (state = widgets, action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
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
        case 'FIND_WIDGET':
            return
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return
        case 'FIND_ALL_WIDGETS':
            return

    }
    return state;
}

export default widgetReducer;