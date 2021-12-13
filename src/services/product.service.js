import http from "./service.config";

const prefix = "products";
const services = {
    getProducts
}
function getProducts(){
    const url = prefix + "/rank/sales";

    return http.get(url);
}

export default services