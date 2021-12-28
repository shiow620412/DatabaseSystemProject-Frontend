import http from "../service.config";

const prefix = "/admin/users";
const services = {
    getMembers,
    modifyMember,
    getAllMembersStatus
}

function getMembers() {
    return http.get(prefix);
}

function modifyMember(userId, isAdminStatus, isBanStatus) {
    const url = prefix + "/";

    return http.put(url + userId + "/operate", {
        "isAdmin": isAdminStatus,
        "isBan": isBanStatus
    });
}

function getAllMembersStatus() {
    const url = prefix + "/status";

    return http.get(url);
}

export default services