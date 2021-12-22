import http from "../service.config";

const prefix = "/admin";
const services = {
    getMembers,
    modifyUser
}

function getMembers() {
    const url = prefix + "/users";

    return http.get(url);
}

function modifyUser(userId, status) {
    const url = prefix + "/users/";

    return http.put(url + userId + "/" + status, {
        userId,
        status
    });
}

export default services