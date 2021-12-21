import http from "../service.config";

const prefix = "/admin";
const services = {
    getUser,
    banUser
}

function getUser() {
    const url = prefix + "/user";

    return http.get(url);
}

function banUser(id) {
    const url = prefix + "/user/";

    return http.post(url + id + "/banStatus", {
        id
    });
}

export default services