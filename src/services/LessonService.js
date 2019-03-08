class LessonService {
    LESSON_API_URL = "localhost:8080/api/lessons/";

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
}
export default LessonService;