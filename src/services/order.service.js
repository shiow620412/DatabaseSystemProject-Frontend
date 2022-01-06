import http from "./service.config"

const prefix = "/orders";
const services = {
    submitOrder,
    getTotalOrder,
    getOrderDetail,
    deleteOrder
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
function deleteOrder(orderId){
    let url = prefix+'/'+orderId;

    return http.delete(url,{
        data: {
            "orderId": orderId
        }
    });
}

export default services;