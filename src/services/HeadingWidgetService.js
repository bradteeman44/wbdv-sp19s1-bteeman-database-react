class HeadingWidgetService {

    HEADING_WIDGET_API_URL = "http://localhost:8080/api/heading/widget/";

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