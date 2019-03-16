import HeadingWidgetService from "./HeadingWidgetService";
import ListWidgetService from "./ListWidgetService";
import ImageWidgetService from "./ImageWidgetService";
import ParagraphWidgetService from "./ParagraphWidgetService";

class WidgetService {

    TOPIC_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/topics/";
    WIDGET_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/widget/";
    headingWidgetService = new HeadingWidgetService();
    listWidgetService = new ListWidgetService();
    imageWidgetService = new ImageWidgetService();
    paragraphWidgetService = new ParagraphWidgetService();

    createWidget = (topic, widget) =>
        fetch(this.TOPIC_API_URL + topic.id + "/widget", {
            method: 'post',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());

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

    deleteWidget = (deleteWidget) =>
        fetch(this.WIDGET_API_URL + deleteWidget.id, {
            method: 'delete'
        }).then();

    saveWidgets = (topic, widgets) => {
        widgets.map(widget => {
            if(widget.wtype === 'HEADING') {
                this.headingWidgetService.createHeadingWidget(topic, widget)
            } else if (widget.wtype === 'IMAGE') {
                this.imageWidgetService.createImageWidget(topic, widget)
            } else if (widget.wtype === 'PARAGRAPH') {
                this.paragraphWidgetService.createListWidget(topic, widget)
            } else if (widget.wtype === 'LIST') {
                this.listWidgetService.createListWidget(topic, widget)
            } else {
                this.createWidget(topic, widget)
            }
        })
    }
}

export default WidgetService;