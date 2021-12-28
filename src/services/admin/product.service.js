import http from "../service.config";

const prefix = "/admin/products";
const services = {
    addProduct,
    deleteProduct,
    modifyProduct,
    getAllProductStatus
}

function addProduct(productName, price, thumbnail, description, type, stock) {
    return http.post(prefix, {
        "name": productName,
        "price": price,
        "thumbnail": thumbnail,
        "description": description,
        "type": type,
        "stock": stock
    });
}

function deleteProduct(productID) {
    const url = prefix + "/";

    return http.delete(url + productID);
}

function modifyProduct(productID, price, thumbnail, description, type, stock) {
    const url = prefix + "/";

    return http.put(url + productID, {
        "price": price,
        "thumbnail": thumbnail,
        "description": description,
        "type": type,
        "stock": stock
    });
}

function getAllProductStatus() {
    const url = prefix + "/status";

    return http.get(url);
}

export default services