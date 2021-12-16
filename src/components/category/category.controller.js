import productService from '../../services/product.service'

export default {
    ResolveOverlongString,
    OnSelectProduct,
    RequestNewPage,
}

// 處理字串過長問題
function ResolveOverlongString(input, action){
    this.max_page = parseInt(input.numOfPage);
    input.filterResult.forEach(element => {
        if(element.ProductName.length>12){
            element.ProductName = element.ProductName.substr(0, 12)+"...";
        }else{
            element.ProductName += "";
        }
    });
    switch(action){
        case 0:
            this.inputTable = input.filterResult;
            break;
        case 1:
            input.filterResult.forEach(element => {
                this.inputTable.push(element)
            });
            break;
        default:
            break;
    }
}

function OnSelectProduct(order){
    productService.getProductsBycategory(order).then(data => {
        this.ResolveOverlongString(data, 0);
    })
    this.category = order;
    this.current_page = 1;
}

function RequestNewPage(){
    this.current_page += 1;
    if(this.current_page < this.max_page){
        productService.getNewProductPage(this.category, this.current_page).then(data => {
            this.ResolveOverlongString(data, 1);
        })
    }
}