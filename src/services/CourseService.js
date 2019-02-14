import courses from './courses.json'

class CourseService {
    COURSE_API_URL = "http://localhost:8080/api/courses/";

    constructor() {
        this.courses = courses;
    }

    addCourse = course => {
        if (course === null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course',
                modules: [{id: '', title: '', lessons: [{id: '', title: '', topics: [{id: '', title: ''}]}]}]
            }
        }
        course.id = (new Date()).getTime();
        this.courses.push(course);
        return this.courses
    };

    findCourseById = courseId =>
        fetch(this.COURSE_API_URL + courseId)
            .then(response => response.json()
    );

    findAllCourses = () =>
        fetch(this.COURSE_API_URL).then(response => response.json());

    deleteCourse = deleteCourse =>
        fetch(this.COURSE_API_URL + deleteCourse.id).then(response => response.json());

    updateCourse = (course, updateCourseFld) => {
        course.title = updateCourseFld;
        return this.courses
    };

    addModule = (course, module) => {
        if (module === null) {
            module = {
                id: (new Date()).getTime(),
                title: 'New Module',
                lessons: [{topics: [{widgets: [{}]}]}]
            }
        }
        module.id = (new Date()).getTime();
        course.modules.push(module);
        return course.modules
    };

    deleteModule = (course, deleteModule) =>
        course.modules = course.modules.filter(
            module => module.id !== deleteModule.id
        );

    updateModule = (course, module, updateModuleFld) => {
        module.title = updateModuleFld;
        return course.modules
    };

    addLesson = (module, lesson) => {
        if (lesson === null) {
            lesson = {
                id: (new Date()).getTime(),
                title: 'New Lesson',
                topics: [{widgets: [{}]}]
            }
        }
        lesson.id = (new Date()).getTime();
        module.lessons.push(lesson);
        return module.lessons
    };

    deleteLesson = (module, deleteLesson) =>
        module.lessons = module.lessons.filter(
            lesson => lesson.id !== deleteLesson.id
        );

    updateLesson = (module, lesson, updateLessonFld) => {
        lesson.title = updateLessonFld;
        return module.lessons
    };

    addTopic = (lesson, topic) => {
        if (topic === null) {
            topic = {
                id: (new Date()).getTime(),
                title: 'New Topic',
                widgets: [{}]
            }
        }
        topic.id = (new Date()).getTime();
        lesson.topics.push(topic);
        return lesson.topics
    };

    deleteTopic = (lesson, deleteTopic) =>
        lesson.topics = lesson.topics.filter(
            lesson => lesson.id !== deleteTopic.id
        );

    updateTopic = (lesson, topic, updateTopicFld) => {
        topic.title = updateTopicFld;
        return lesson.topics
    }

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