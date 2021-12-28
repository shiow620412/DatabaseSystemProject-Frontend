import http from "../service.config";

const prefix = "/admin/users";
const services = {
    getMembers,
    modifyUser
}

function getMembers() {
    return http.get(prefix);
}

function modifyUser(userId, isAdminStatus, isBanStatus) {
    const url = prefix + "/";

    return http.put(url + userId + "/operate", {
        "isAdmin": isAdminStatus,
        "isBan": isBanStatus
    });
}

export default services