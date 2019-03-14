class UserService {

    API_URL = "http://localhost:8080/api/"

    registerUser = (username, password) => {
        const user = {
            username: username,
            password: password,
        }
        fetch(this.API_URL + "register", {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }

    profileUser = () => {
        fetch(this.API_URL + "profile", {
            method: 'post'
        }).then(response => response.json());
    }

    loginUser = (username, password) => {
        const user = {
            username: username,
            password: password,
        }
        fetch(this.API_URL + "login", {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    };

    logoutUser = () => {
        fetch(this.API_URL + "logout", {
            method: 'post'
        }).then();
    }

    createUser = (username, password) => {
        const user = {
            username: username,
            password: password,
        }
        fetch(this.API_URL + "users", {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }

    findAllUsers = () => {
        fetch(this.API_URL + "users")
            .then(response => response.json());
    };

    findUserById = userId => {
        fetch(this.API_URL + "users/" + userId)
            .then(response => response.json()
            );
    };

    updateUser = user => {
        fetch(this.API_URL + "users/" + user.id, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }

    deleteUser = deleteUSer => {
        fetch(this.API_URL + "users/" + deleteUSer.id, {
            method: 'delete'
        }).then();
    }

}

export default UserService;