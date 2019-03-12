class CourseService {
    FACULTY_API_URL = "http://localhost:8080/api/faculty/";
    COURSE_API_URL = "http://localhost:8080/api/courses/";

    addCourse = (fid, course) =>
        fetch(this.FACULTY_API_URL + fid + "/courses", {
            method: 'post',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());

    findCourseById = courseId =>
        fetch(this.COURSE_API_URL + courseId)
            .then(response => response.json()
            );

    findAllCourses = fid =>
        fetch(this.FACULTY_API_URL + "6/courses").then(response => response.json());

    deleteCourse = deleteCourse => {
        console.log(deleteCourse.id);
        fetch(this.COURSE_API_URL + deleteCourse.id, {
            method: 'delete'
        }).then();
    }

    updateCourse = (course) => {
        fetch(this.COURSE_API_URL + course.id, {
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