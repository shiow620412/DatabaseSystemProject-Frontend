import http from "./service.config";

const prefix = "/products";
const services = {
    getProducts,
    getProductsBycategory,
    getNewProductPage
}
function getProductsBycategory(type)
{
    const url = prefix + "/categories/"+(type+1).toString();

    return http.get(url);
}
function getProducts(){
    const url = prefix + "/sales";

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