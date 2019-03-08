class ModuleService {
    MODULE_API_URL = "localhost:8080/api/modules/";
    COURSE_API_URL = "localhost:8080/api/courses/";

    findModuleById = mid =>
        fetch(this.MODULE_API_URL + mid)
            .then(response => response.json()
            );

    findAllModules = cid =>
        fetch(this.COURSE_API_URL + cid + "/modules").then(response => response.json());

    addModule = (course, module) => {
        fetch(this.COURSE_API_URL + course.id + "/modules", {
            method: 'post',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    };

    deleteModule = (deleteModule) => {
        console.log(deleteModule.id);
        fetch(this.MODULE_API_URL + deleteModule.id, {
            method: 'delete'
        }).then();
    }

    updateModule = (module) => {
        fetch(this.MODULE_API_URL + module.id, {
            method: 'put',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    };
}
export default ModuleService;