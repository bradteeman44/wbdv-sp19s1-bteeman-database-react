import courses from './courses.json'

class CourseService {
    constructor() {
        this.courses = courses;
    }
    addCourse = course => {
        if(course === null) {
            course = {
                id: (Math.random() * 1000000000),
                title: 'New Course'
            }
        }
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

    updateCourse = (id, course) => {

    }

}
export default CourseService