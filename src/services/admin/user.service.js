import http from "../service.config";

const prefix = "/admin/users";
const services = {
    getMembers,
    modifyUser,
    getAllMemberStatus
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

function getAllMemberStatus() {
    const url = prefix + "/status";

    return http.get(url);
}

export default services