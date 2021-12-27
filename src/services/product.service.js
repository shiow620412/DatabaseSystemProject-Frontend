import http from "./service.config";

const prefix = "/products";
const services = {
    getProducts,
    getProductsBycategory,
    getProductdetail,
    getNewProductPage,
    getProductBySearch
}
function getProductsBycategory(type, filter, min, max)
{
    let url = prefix + "/category/"+type.toString();
    if(filter!='00000'){
        url += "?";
        if(filter[0]==='1'){url += "filter=Id&";}
        if(filter[1]==='1'){url += "filter=Stock&";}
        if(filter[2]==='1'){url += "filter=Price&sort=ASC&";}
        if(filter[3]==='1'){url += "filter=Price&sort=DESC&";}
        if(filter[4]==='1'){url += "minPrice="+min+"&maxPrice="+max+"&";}
    }

    return http.get(url);
}
function getProducts(){
    let url = prefix + "/sales";

    return http.get(url);
}
function getProductdetail(id){
    let url = prefix + "/"+id;

    return http.get(url);
}
function getNewProductPage(_type, _page, filter, min, max){
    if(_type===0){
        let url = prefix + "/sales?page="+_page.toString();
        return http.get(url);
    }else{
        let url = prefix + "/category/"+(_type).toString()+"?page="+_page.toString();
        if(filter!='00000'){
            url += "&";
            if(filter[0]==='1'){url += "filter=Id&";}
            if(filter[1]==='1'){url += "filter=Stock&";}
            if(filter[2]==='1'){url += "filter=Price&sort=ASC&";}
            if(filter[3]==='1'){url += "filter=Price&sort=DESC&";}
            if(filter[4]==='1'){url += "minPrice="+min+"&maxPrice="+max+"&";}
        }
        return http.get(url);
    }
}
function getProductBySearch(name){
    let url = prefix + "/search?productName=" + name;

    return http.get(url);
}

export default services