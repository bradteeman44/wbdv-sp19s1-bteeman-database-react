class LessonService {
    LESSON_API_URL = "http://localhost:8080/api/lessons/";
    MODULE_API_URL = "http://localhost:8080/api/modules/";

    findLessoneById = lessonId =>
        fetch(this.LESSON_API_URL + lessonId)
            .then(response => response.json());

    findAllLessons = moduleId =>
        fetch(this.MODULE_API_URL + moduleId + "/lessons").then(response => response.json());

    addLesson = (module, lesson) =>
        fetch(this.MODULE_API_URL + module.id + "/lessons", {
            method: 'post',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());

    deleteLesson = (deleteLesson) =>
        fetch(this.LESSON_API_URL + deleteLesson.id, {
            method: 'delete'
        }).then();

    updateLesson = (lesson) =>
        fetch(this.LESSON_API_URL + lesson.id, {
            method: 'put',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
}
export default LessonService;