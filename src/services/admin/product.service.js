import http from "../service.config";

const prefix = "/admin/products";
const services = {
    getAllProducts,
    getProducts,
    addProduct,
    changeProductStatus,
    modifyProduct,
    getAllProductStatus
}

function getAllProducts() {
    return http.get(prefix);
}

function getProducts(pageNum) {
    const url = prefix + "?page=" + pageNum

    return http.get(url);
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

function changeProductStatus(productID, status) {
    const url = prefix + "/";

    return http.put(url + productID + "/operate", {
        "onShelf": status
    });
}

function modifyProduct(productId, price, thumbnail, description, stock) {
    const url = prefix + "/";

    return http.put(url + productId, {
        "price": price,
        "thumbnail": thumbnail,
        "description": description,
        "stock": stock
    });
}

function getAllProductStatus() {
    const url = prefix + "/status";

    return http.get(url);
}

export default services