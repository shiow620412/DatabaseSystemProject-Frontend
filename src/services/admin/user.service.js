import http from "../service.config";

const prefix = "/admin/users";
const services = {
    getAllMembers,
    getMembers,
    modifyUser,
    getAllMemberStatus
}

function getAllMembers() {
    return http.get(prefix);
}

function getMembers(pageNum) {
    const url = prefix + "?page=" + pageNum

    return http.get(url);
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