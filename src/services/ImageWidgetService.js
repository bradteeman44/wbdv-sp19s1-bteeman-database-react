class ImageWidgetService {

    IMAGE_WIDGET_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/image/widget/";

    findImageWidgetById = (widgetId) =>
        fetch(this.IMAGE_WIDGET_API_URL + widgetId)
            .then(response => response.json()
            );

    updateImageWidget = (widget) => {
        fetch(this.IMAGE_WIDGET_API_URL + widget.id, {
            method: 'put',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    deleteImageWidget = (deleteWidget) => {
        fetch(this.IMAGE_WIDGET_API_URL + deleteWidget.id, {
            method: 'delete'
        }).then(response => response.json());
    }
}
export default ImageWidgetService;