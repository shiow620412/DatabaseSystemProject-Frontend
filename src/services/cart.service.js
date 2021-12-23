import http from "./service.config";

const prefix = "/cart";
const services = {
    deleteProductOfCart,
    postProductToCart,
    modifyProductQuantityInCart,
}
function deleteProductOfCart(productID)
{
    return http.get(url,{
        productID
    });
}

function postProductToCart(productID,quantity)
{
    return http.post(url,{
        productID,quantity
    });
}
function modifyProductQuantityInCart(productID,quantity)
{
    return http.put(url,{
        productID,quantity
    });
}
export default services