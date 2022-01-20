import http from "./service.config";

const prefix = "/products";
const services = {
    getProducts,
    getProductDetail,

    getProductsByCategory,
    searchAllProductByName,
    searchCategoryProductByName,
    countProductInCategoryByName
}
function removeUndefinedParams(obj){
    const params = new URLSearchParams(obj)
    const keysForDel = [];
    params.forEach((value, key) => {
        
    
        if(value === "undefined"){
            keysForDel.push(key)
        }
    })
    keysForDel.forEach(key => {
        params.delete(key);
    })
    return params.toString();
}
function getProductsByCategory(categoryId, page, filterObj){//, filter, sort, minPrice, maxPrice ){
    const paramObj = Object.assign({}, {page}, filterObj );
    const params = removeUndefinedParams(paramObj);
    const url = prefix + `/category/${categoryId}?${params}`;

    return http.get(url);
}
function getProducts(page, filterObj){
    const paramObj = Object.assign({}, {page}, filterObj );
    const params = removeUndefinedParams(paramObj);
    const url = prefix + `/sales?${params}`;

    return http.get(url);
}

function searchAllProductByName(page, filterObj){
    const paramObj = Object.assign({}, {page}, filterObj );
    const params = removeUndefinedParams(paramObj);
    const url = prefix + `/search?${params}`;

    return http.get(url);
}

function searchCategoryProductByName(categoryId, page ,filterObj){
    const paramObj = Object.assign({}, {page}, filterObj );
    const params = removeUndefinedParams(paramObj);
    const url = prefix + `/search/category/${categoryId}?${params}`;

    return http.get(url);
}

function countProductInCategoryByName(productName){
    const param = removeUndefinedParams({productName})
    const url = prefix + "/search/category?" + param
    
    return http.get(url);
}



function getProductDetail(id){
    let url = prefix + "/"+id;

    return http.get(url);
}



export default services