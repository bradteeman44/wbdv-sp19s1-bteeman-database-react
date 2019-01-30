import courses from './courses.json'

class CourseService {
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
        course.id = (new Date()).getTime()
        this.courses.push(course)
        return this.courses
    }

    findCourseById = courseId =>
        this.courses = this.courses.find(
            course => course.id === courseId
        )

    findAllCourses = () =>
        this.courses;

    deleteCourse = deleteCourse =>
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        )

    updateCourse = (course, updateCourseFld) => {
        course.title = updateCourseFld
        return this.courses
    }

    addModule = (course, module) => {
        if (module === null) {
            module = {
                id: (new Date()).getTime(),
                title: 'New Module',
                lessons: [{topics: [{}]}]
            }
        }
        module.id = (new Date()).getTime()
        course.modules.push(module)
        return course.modules
    }

    deleteModule = (course, deleteModule) =>
        course.modules = course.modules.filter(
            module => module.id !== deleteModule.id
        )

    updateModule = (course, module, updateModuleFld) => {
        module.title = updateModuleFld
        return course.modules
    }

    addLesson = (module, lesson) => {
        if (lesson === null) {
            lesson = {
                id: (new Date()).getTime(),
                title: 'New Lesson',
                topics: [{}]
            }
        }
        lesson.id = (new Date()).getTime()
        module.lessons.push(lesson)
        return module.lessons
    }

    deleteLesson = (module, deleteLesson) =>
        module.lessons = module.lessons.filter(
            lesson => lesson.id !== deleteLesson.id
        )

    updateLesson = (module, lesson, updateLessonFld) => {
        lesson.title = updateLessonFld
        return module.lessons
    }

    addTopic = (lesson, topic) => {
        if (topic === null) {
            topic = {
                id: (new Date()).getTime(),
                title: 'New Topic'
            }
        }
        topic.id = (new Date()).getTime()
        lesson.topics.push(topic)
        return lesson.topics
    }

    deleteTopic = (lesson, deleteTopic) =>
        lesson.topics = lesson.topics.filter(
            lesson => lesson.id !== deleteTopic.id
        )

    updateTopic = (lesson, topic, updateTopicFld) => {
        topic.title = updateTopicFld
        return lesson.topics
    }

}

export default CourseService