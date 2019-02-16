class UserService {

    API_URL = "https://wb-sp19s1-bteeman-rest.herokuapp.com/api/"

    registerUser = user => {
        fetch(this.API_URL + "login", {
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

    loginUser = credentials => {
        fetch(this.API_URL + "login", {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    };

    logoutUser = () => {
        fetch(this.API_URL + "logout", {
            method: 'post'
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

}

export default UserService;