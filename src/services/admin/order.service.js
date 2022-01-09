import http from "../service.config";

const prefix = "/admin/orders";
const services = {
    getAllOrders,
    getOrders,
    modifyOrder,
    getAllOrderStatus
}

function getAllOrders() {
    return http.get(prefix);
}

function getOrders(pageNum) {
    const url = prefix + "?page=" + pageNum

    return http.get(url);
}

function modifyOrder(orderId,status) {
    const url = prefix + "/";

    return http.put(url + orderId + "/" + status, {
        orderId,
        status
    });
}

function getAllOrderStatus() {
    const url = prefix + "/status";

    return http.get(url);
}

export default services