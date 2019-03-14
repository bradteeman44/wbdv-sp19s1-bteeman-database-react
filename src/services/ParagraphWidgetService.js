class ParagraphWidgetService {

    PARAGRAPH_WIDGET_API_URL = "http://localhost:8080/api/paragraph/widget/";

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