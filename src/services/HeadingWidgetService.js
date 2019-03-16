class HeadingWidgetService {

    HEADING_WIDGET_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/heading/widget/";
    TOPIC_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/topics/";

    createHeadingWidget = (topic, widget) =>
        fetch(this.TOPIC_API_URL + topic.id + "/heading/widget", {
            method: 'post',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());

    findHeadingWidgetById = (widgetId) =>
        fetch(this.HEADING_WIDGET_API_URL + widgetId)
            .then(response => response.json()
            );

    updateHeadingWidget = (widget) => {
        fetch(this.HEADING_WIDGET_API_URL + widget.id, {
            method: 'put',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    deleteHeadingWidget = (deleteWidget) => {
        fetch(this.HEADING_WIDGET_API_URL + deleteWidget.id, {
            method: 'delete'
        }).then(response => response.json());
    }
}
export default HeadingWidgetService;