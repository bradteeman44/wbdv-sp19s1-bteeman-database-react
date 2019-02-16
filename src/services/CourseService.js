class CourseService {
    COURSE_API_URL = "https://wb-sp19s1-bteeman-rest.herokuapp.com/api/courses/";
    MODULE_API_URL = "https://wb-sp19s1-bteeman-rest.herokuapp.com/api/modules/";
    LESSON_API_URL = "https://wb-sp19s1-bteeman-rest.herokuapp.com/api/lessons/";
    TOPIC_API_URL = "https://wb-sp19s1-bteeman-rest.herokuapp.com/api/topics/";

    addCourse = course =>
        fetch(this.COURSE_API_URL, {
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

    findAllCourses = () =>
        fetch(this.COURSE_API_URL).then(response => response.json());

    deleteCourse = deleteCourse => {
        console.log(deleteCourse.id);
        fetch(this.COURSE_API_URL + deleteCourse.id, {
            method: 'delete'
        }).then(response => response.json());
    }

    updateCourse = (course) => {
        fetch(this.COURSE_API_URL + course.id, {
            method: 'put',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    };

    findModuleById = moduleId =>
        fetch(this.MODULE_API_URL + moduleId)
            .then(response => response.json()
            );

    findAllModules = courseId =>
        fetch(this.COURSE_API_URL + courseId + "/modules").then(response => response.json());

    addModule = (course, module) => {
        fetch(this.COURSE_API_URL + course.id + "/modules", {
            method: 'post',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    };

    deleteModule = (course, deleteModule) => {
        console.log(deleteModule.id);
        fetch(this.MODULE_API_URL + deleteModule.id, {
            method: 'delete'
        }).then(response => response.json());
    }

    updateModule = (course, module) => {
        fetch(this.MODULE_API_URL + module.id, {
            method: 'put',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    };

    findLessoneById = lessonId =>
        fetch(this.LESSON_API_URL + lessonId)
            .then(response => response.json()
            );

    findAllLessons = moduleId =>
        fetch(this.MODULE_API_URL + moduleId + "/lessons").then(response => response.json());

    addLesson = (module, lesson) => {
        fetch(this.MODULE_API_URL + module.id + "/lessons", {
            method: 'post',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    };

    deleteLesson = (module, deleteLesson) => {
        console.log(deleteLesson.id);
        fetch(this.LESSON_API_URL + deleteLesson.id, {
            method: 'delete'
        }).then(response => response.json());
    }

    updateLesson = (module, lesson) => {
        fetch(this.LESSON_API_URL + lesson.id, {
            method: 'put',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    };

    findTopicById = topicId =>
        fetch(this.TOPIC_API_URL + topicId)
            .then(response => response.json()
            );

    findAllTopics = lesson =>
        fetch(this.LESSON_API_URL + lesson.id + "/topics").then(response => response.json());

    addTopic = (lesson, topic) => {
        fetch(this.LESSON_API_URL + lesson.id + "/topics", {
            method: 'post',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    };

    deleteTopic = (lesson, deleteTopic) => {
        console.log(deleteTopic.id);
        fetch(this.TOPIC_API_URL + deleteTopic.id, {
            method: 'delete'
        }).then(response => response.json());
    }

    updateTopic = (lesson, topic) => {
        fetch(this.TOPIC_API_URL + topic.id, {
            method: 'put',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
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