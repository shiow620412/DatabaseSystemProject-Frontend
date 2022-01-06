import http from "./service.config"

const prefix = "/orders";
const services = {
    submitOrder,
    getTotalOrder,
    getOrderDetail
}
function submitOrder(products, paymentMethod){
    let url = prefix;

    return http.post(url,{
        products,
        paymentMethod
    })
}
function getTotalOrder(){
    let url = prefix;

    return http.get(url);
}
function getOrderDetail(orderID){
    let url = prefix+'/'+orderID+'/detail';

    return http.get(url);
}

export default services;