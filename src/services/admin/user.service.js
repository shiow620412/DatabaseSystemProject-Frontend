import http from "../service.config";

const prefix = "/admin";
const services = {
    getMembers
    // banUser
}

function getMembers() {
    const url = prefix + "/users";

    return http.get(url);
}

// function banUser(id, status) {
//     const url = prefix + "/users/";

//     return http.post(url + id + status, {
//         id,
//         status
//     });
// }

export default services