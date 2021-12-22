import http from "../service.config";

const prefix = "/admin/users";
const services = {
    getMembers,
    modifyUser
}

function getMembers() {
    return http.get(prefix);
}

function modifyUser(userId, status) {
    const url = prefix + "/";

    return http.put(url + userId + "/" + status, {
        userId,
        status
    });
}

export default services