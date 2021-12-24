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
            element.ProductName = element.ProductName.substr(0, 12)+"...";
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
    productService.getProductBySearch(name).then(data => {
        this.ResolveOverlongString(data, 0);
    })
}

function OnSelectCategoy(order, filter, min, max){
    productService.getProductsBycategory(order+1,filter, min, max).then(data => {
        this.ResolveOverlongString(data, 0);
    })
    this.category = order;
    this.current_page = 1;
}

function RequestNewPage(){
    console.log("receive!");
    this.current_page += 1;
    if(this.current_page <= this.max_page && this.category!=-1){
        productService.getNewProductPage(this.category+1, this.current_page, this.filter, this.input1, this.input2).then(data => {
            this.ResolveOverlongString(data, 1);
        })
    }
    else if(this.current_page < this.max_page){
        productService.getNewProductPage(this.category+1, this.current_page).then(data => {
            this.ResolveOverlongString(data, 1);
        })
    }
}

function changefilter(input, min, max){
    if(input[4]==='1'){
        this.filter = this.filter.substr(0, 4)+'1';
    }
    else{
        this.filter = input;
    }
    this.OnSelectCategoy(this.category, this.filter, min, max);
}