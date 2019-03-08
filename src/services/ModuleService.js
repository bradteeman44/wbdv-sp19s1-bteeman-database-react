class ModuleService {
    MODULE_API_URL = "localhost:8080/api/modules/";

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
}
export default ModuleService;