import http from "./service.config";

const prefix = "/cart";
const services = {
    getCart,
    deleteProduct,
    addToCart,
    modifyProductQuantity
}

function getCart() {
    return http.get(prefix);
}

function deleteProduct(productID) {
    return http.delete(prefix, {
        data: {
        "productId": productID
    }
    });
}

function addToCart(productID, quantity) {
    return http.post(prefix, {
        "productId": productID,
        "quantity": quantity
    });
}

function modifyProductQuantity(productID, quantity) {
    return http.put(prefix, {
        "productId": productID,
        "quantity": quantity
    });
}

export default services