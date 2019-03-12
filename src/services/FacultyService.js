class FacultyService {

    USER_API_URL = "http://localhost:8080/api/users/";
    FACULTY_API_URL = "http://localhost:8080/api/faculty/";

    createFaculty = faculty => {
        fetch(this.FACULTY_API_URL, {
            method: 'post',
            body: JSON.stringify(faculty),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }

    findAllFaculty = () => {
        fetch(this.FACULTY_API_URL)
            .then(response => response.json());
    };

    findFacultyById = fid => {
        fetch(this.FACULTY_API_URL + fid)
            .then(response => response.json()
            );
    };

    updateFaculty = faculty => {
        fetch(this.FACULTY_API_URL + faculty.id, {
            method: 'put',
            body: JSON.stringify(faculty),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }

    deleteFaculty = faculty => {
        console.log(faculty.id);
        fetch(this.USER_API_URL + faculty.id, {
            method: 'delete'
        }).then();
    }

}

export default FacultyService;