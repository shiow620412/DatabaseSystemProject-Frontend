import http from "./service.config";

const prefix = "/products";
const services = {
    getProducts,
    getProductdetail,
    getNewProductPage,
    getProductBySearch,
    getProductBySearchAndCategory
}
function getProducts(){
    let url = prefix + "/sales";

    return http.get(url);
}
function getProductdetail(id){
    let url = prefix + "/"+id;

    return http.get(url);
}
function getNewProductPage(type, name, _page, filter, min, max){
    let temp = "filter=";
    let url = '';
    if(parseInt(type)===-1){
        url = prefix + '/sales?';
    }
    else{
        url = name==='' ? prefix + "/category/"+(parseInt(type)+1).toString()+'?' : prefix + "/search/category/" + (parseInt(type)+1).toString()+'?productName='+name+'&    ';
        if(filter[0]==='1'){url += "filter=Id&";temp = '';}
        if(filter[1]==='1'){url += "filter=Stock&";temp = '';}
        if(filter[2]==='1'){url += temp + "Price&sort=ASC&";}
        if(filter[3]==='1'){url += temp + "Price&sort=DESC&";}
        if(filter[4]==='1'){url += "minPrice="+min+"&maxPrice="+max+"&";}
    }
    url += 'page='+_page.toString();
    console.log(url);

    return http.get(url);
}
function getProductBySearch(name){
    let url = prefix + "/search?productName=" + name;

    return http.get(url);
}
function getProductBySearchAndCategory(type, name, filter, min, max){
    let temp = "filter=";
    let url = name==='' ? prefix + "/category/"+(parseInt(type)+1).toString()+'?' : prefix + "/search/category/" + (parseInt(type)+1).toString()+'?productName='+name+'&    ';
    if(filter[0]==='1'){url += "filter=Id&";temp = '';}
    if(filter[1]==='1'){url += "filter=Stock&";temp = '';}
    if(filter[2]==='1'){url += temp + "Price&sort=ASC&";}
    if(filter[3]==='1'){url += temp + "Price&sort=DESC&";}
    if(filter[4]==='1'){url += "minPrice="+min+"&maxPrice="+max+"&";}

    return http.get(url);
}

export default services