import http from "./service.config"

const prefix = "/cart";
const services = {
    PutProductIntoCart,
    getProductFromCart,
    deleteProductofCart
}
function PutProductIntoCart(productId, quantity){
    let url = prefix;

    return http.post(url,{
        productId,
        quantity
    });
}
function getProductFromCart(){
    let url = prefix;

    return http.get(url);
}
function deleteProductofCart(ProductID){
    let url = prefix;

    return http.delete(url,{
        data: {
            "productId": ProductID
        }
    });
}

export default services;