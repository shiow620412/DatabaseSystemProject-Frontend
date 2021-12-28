import http from "../service.config";

const prefix = "/admin/orders";
const services = {
    getOrders,
    modifyOrder,
    getAllOrderStatus
}

function getOrders() {
    return http.get(prefix);
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