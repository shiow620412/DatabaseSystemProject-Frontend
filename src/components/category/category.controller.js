import productService from '../../services/product.service'

export default {
    ResolveOverlongString,
    OnSelectCategoy,
    RequestNewPage,
    changefilter,
    searchByName
}

// 處理字串過長問題
function ResolveOverlongString(input, action){
    this.max_page = parseInt(input.pages);
    input.result.forEach(element => {
        if(element.ProductName.length>12){
            element.ProductName = element.ProductName.substring(0, 12)+"...";
        }else{
            element.ProductName += "";
        }
    });
    switch(action){
        case 0:
            this.inputTable = input.result;
            break;
        case 1:
            input.result.forEach(element => {
                this.inputTable.push(element)
            });
            break;
        default:
            break;
    }
}

function searchByName(name){
    this.isSearch = 1;
    this.filter = '00000';
    productService.getProductBySearch(name).then(data => {
        this.ResolveOverlongString(data, 0);
    })
}

function OnSelectCategoy(order, name, filter, min, max){
    productService.getProductBySearchAndCategory(order, name, filter, min, max).then(data => {
        this.ResolveOverlongString(data, 0);
    })
    this.category = order;
    this.current_page = 1;
}

function RequestNewPage(){
    this.current_page += 1;
    if(this.current_page <= this.max_page){
        productService.getNewProductPage(this.category, this.searchName, this.current_page, this.filter, this.input1, this.input2).then(data => {
            this.ResolveOverlongString(data, 1);
        })
    }
}

function changefilter(name, filter, min, max){
    if(filter[0]==='1' || filter[1]==='1'){
        let temp = filter[0]==='1' ? '10' : '01';
        this.filter = temp + this.filter.substring(2);
    }
    if(filter[2]==='1' || filter[3]==='1'){
        let temp = filter[2]==='1' ? '10' : '01';
        this.filter = this.filter.substring(0, 2) + temp + this.filter[4];
    }
    if(filter[4]==='1'){
        this.filter = this.filter.substring(0, 4)+'1';
    }
    this.OnSelectCategoy(this.category, name, this.filter, min, max);
}