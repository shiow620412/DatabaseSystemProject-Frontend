import http from "./service.config";

const prefix = "/orders";
const services = {
    getOrderByUserID,
    createOrder,
    deleteOrder,
    getOrderDetail
}
function getOrderByUserID(_page)
{
    let url = prefix + "/?page="+_page.toString();
    return http.get(url);
}

function createOrder(data)
{
    return http.post(url,{
        data
    });
}
function deleteOrder(id)
{
    let url = prefix + "/"+id;
    return http.delete(url);
}

function getOrderDetail(id)
{
    let url = prefix + "/"+id+"/detail";
    return http.get(url);
}

export default services