class CourseService {
    COURSE_API_URL = "https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/courses";

    addCourse = (course) =>
        fetch(this.COURSE_API_URL, {
            method: 'post',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());

    findCourseById = courseId =>
        fetch(this.COURSE_API_URL + "/" + courseId)
            .then(response => response.json()
            );

    findAllCourses = () =>
        fetch(this.COURSE_API_URL).then(response => response.json());

    deleteCourse = deleteCourse => {
        console.log(deleteCourse.id);
        fetch(this.COURSE_API_URL + "/" + deleteCourse.id, {
            method: 'delete'
        }).then();
    }

    updateCourse = (course) => {
        fetch(this.COURSE_API_URL + "/" + course.id, {
            method: 'put',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    };



    createWidget = (topic) => {
        console.log(topic.widgets)
        const widget = {
            id: (new Date()).getTime(),
            title: 'New Widget',
            text: 'New Widget',
            size: 1,
            editing: 'EDIT'
        }
        console.log(widget)
        topic.widgets.push(widget);
        console.log(topic.widgets)
        return widget
    }

    saveWidgets = (topic, widgets) => {
        topic.widgets = widgets;
        return topic.widgets
    }

    findWidgets = (topic) => {
        return topic.widgets
    }

    findAllWidgets = () => {
        return this.widgets
    }

    findWidget = (widgetId) => {
        this.widgets = this.widgets.find(
            widget => widget.id === widgetId
        );
    }

    updateWidget = (topic, widget, updateWidgetFld) => {
        widget.title = updateWidgetFld;
        return topic.widgets
    }

    deleteWidget = (topic, deleteWidget) => {
        console.log(topic.widgets)
        topic.widgets = topic.widgets.filter(
            widget => widget.id !== deleteWidget.id
        );
    }

}

export default CourseService