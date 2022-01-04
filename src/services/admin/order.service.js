import http from "../service.config";

const prefix = "/admin/orders";
const services = {
    getOrders,
    modifyOrder
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

export default services