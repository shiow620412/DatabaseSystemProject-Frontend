import http from "./service.config";

const prefix = "/cart";
const services = {
    deleteProductOfCart,
    postProductToCart,
    modifyProductQuantityInCart,
}
function deleteProductOfCart(data)
{
    return http.get(url,{
        data
    });
}

function postProductToCart(data)
{
    return http.post(url,{
        data
    });
}
function modifyProductQuantityInCart(id)
{
    return http.put(url,{
        data
    });
}
export default services