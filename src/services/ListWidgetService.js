class ListWidgetService {

    LIST_WIDGET_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/list/widget/";

    findListWidgetById = (widgetId) =>
        fetch(this.LIST_WIDGET_API_URL + widgetId)
            .then(response => response.json()
            );

    updateListWidget = (widget) => {
        fetch(this.LIST_WIDGET_API_URL + widget.id, {
            method: 'put',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    deleteListWidget = (deleteWidget) => {
        fetch(this.LIST_WIDGET_API_URL + deleteWidget.id, {
            method: 'delete'
        }).then(response => response.json());
    }
}
export default ListWidgetService;