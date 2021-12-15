import productService from '../../services/product.service'

export default {
    ResolveOverlongString,
    OnSelectProduct,
    OnfruitSelected,
    OnfoodSelected,
    OncomputerSelected,
    OnclotheSelected,
    OnSuppliesSelected,
    OndrinkSelected
}

// 處理字串過長問題
function ResolveOverlongString(input){
    input.filterResult.forEach(element => {
        if(element.ProductName.length>12){
            element.ProductName = element.ProductName.substr(0, 12)+"...";
        }else{
            element.ProductName += "";
        }
    });
    this.inputTable = input.filterResult;
}

// 搜尋所有商品
function OnSelectProduct(order){
    switch(order){
        case 0:
            this.OnfruitSelected();
            break;
        case 1:
            this.OnfoodSelected();
            break;
        case 2:
            this.OncomputerSelected();
            break;
        case 3:
            this.OnclotheSelected();
            break;
        case 4:
            this.OnSuppliesSelected();
            break;
        case 5:
            this.OndrinkSelected();
            break;
        default:
            break;
    }
}

// 搜尋水果商品
function OnfruitSelected(){
    productService.getProductsByfruit().then(data => {
        this.ResolveOverlongString(data);
    })
}

// 搜尋食品商品
function OnfoodSelected(){
    productService.getProductsByfood().then(data => {
        this.ResolveOverlongString(data);
    })
}

// 搜尋電腦商品
function OncomputerSelected(){
    productService.getProductsBycomputer().then(data => {
        this.ResolveOverlongString(data);
    })
}

// 搜尋衣服商品
function OnclotheSelected(){
    productService.getProductsByclothe().then(data => {
        this.ResolveOverlongString(data);
    })
}

// 搜尋日常用品商品
function OnSuppliesSelected(){
    productService.getProductsBySupplies().then(data => {
        this.ResolveOverlongString(data);
    })
}

// 搜尋飲料商品
function OndrinkSelected(){
    productService.getProductsBydrink().then(data => {
        this.ResolveOverlongString(data);
    })
}