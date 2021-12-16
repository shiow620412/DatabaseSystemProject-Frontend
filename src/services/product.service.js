import http from "./service.config";

const prefix = "/products";
const services = {
    getProducts,
    getProductsByfruit,
    getProductsByfood,
    getProductsBycomputer,
    getProductsByclothe,
    getProductsBySupplies,
    getProductsBydrink,
    getNewProductPage
}
function getProducts(){
    const url = prefix + "/sales";

    return http.get(url);
}
function getProductsByfruit(){
    const url = prefix + "/categories/1";

    return http.get(url);
}
function getProductsByfood(){
    const url = prefix + "/categories/2";

    return http.get(url);
}
function getProductsBycomputer(){
    const url = prefix + "/categories/3";

    return http.get(url);
}
function getProductsByclothe(){
    const url = prefix + "/categories/4";

    return http.get(url);
}
function getProductsBySupplies(){
    const url = prefix + "/categories/5";

    return http.get(url);
}
function getProductsBydrink(){
    const url = prefix + "/categories/6";

    return http.get(url);
}
function getNewProductPage(_type, _page){
    if(_type===0){
        const url = prefix + "/sales?page="+_page.toString();
        return http.get(url);
    }else{
        const url = prefix + "/categories/"+(_type).toString()+"?page="+_page.toString();
        return http.get(url);
    }
}

export default services