import http from "./service.config"

const prefix = "/cart";
const services = {
    PutProductIntoCart,
    getProductFromCart,
    deleteProductofCart,
    updateProductQuantity
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

function updateProductQuantity(productId, quantity){
    const url = prefix;

    return http.put(url, {
        productId, quantity
    })
}
export default services;