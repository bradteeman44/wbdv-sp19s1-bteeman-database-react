class WidgetService {

    TOPIC_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/topics/";
    WIDGET_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/widget/";

    createWidget = (topic) => {
        const widget = {
            title: 'New Widget',
            wtype: "HEADING",
            editing: false
        }
        fetch(this.TOPIC_API_URL + topic.id + "/widget", {
            method: 'post',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    };

    findAllWidgets = topic =>
        fetch(this.TOPIC_API_URL + topic.id + "/widget").then(response => response.json());

    findWidgetById = (widgetId) =>
        fetch(this.WIDGET_API_URL + widgetId)
            .then(response => response.json()
            );

    updateWidget = (widget) => {
        fetch(this.WIDGET_API_URL + widget.id, {
            method: 'put',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    deleteWidget = (deleteWidget) => {
        fetch(this.WIDGET_API_URL + deleteWidget.id, {
            method: 'delete'
        }).then(response => response.json());
    }
}

export default WidgetService;