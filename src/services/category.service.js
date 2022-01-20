import http from "./service.config"

const prefix = "/category";
const services = {
    getCategories
}
function getCategories(){
    const url = prefix;
    return http.get(url)
}

export default services;