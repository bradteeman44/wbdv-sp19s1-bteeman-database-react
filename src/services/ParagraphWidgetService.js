class ParagraphWidgetService {

    PARAGRAPH_WIDGET_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/paragraph/widget/";
    TOPIC_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/topics/";

    createListWidget = (topic, widget) =>
        fetch(this.TOPIC_API_URL + topic.id + "/paragraph/widget", {
            method: 'post',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());

    findParagraphWidgetById = (widgetId) =>
        fetch(this.LIST_WIDGET_API_URL + widgetId)
            .then(response => response.json()
            );

    updateParagraphWidget = (widget) => {
        fetch(this.PARAGRAPH_WIDGET_API_URL + widget.id, {
            method: 'put',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    deleteParagraphWidget = (deleteWidget) => {
        fetch(this.PARAGRAPH_WIDGET_API_URL + deleteWidget.id, {
            method: 'delete'
        }).then(response => response.json());
    }
}
export default ParagraphWidgetService;