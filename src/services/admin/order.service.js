import http from "../service.config";

const prefix = "/admin";
const services = {
    getOrders,
    modifyOrder
}

function getOrders() {
    const url = prefix + "/users";

    return http.get(url);
}

function modifyOrder(orderId) {
    const url = prefix + "/users/";

    return http.put(url + orderId, {
        orderId
    });
}

export default services