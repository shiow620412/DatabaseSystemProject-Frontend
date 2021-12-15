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

function OnfruitSelected(){
    productService.getProductsByfruit().then(data => {
        this.ResolveOverlongString(data);
    })
}

function OnfoodSelected(){
    productService.getProductsByfood().then(data => {
        this.ResolveOverlongString(data);
    })
}

function OncomputerSelected(){
    productService.getProductsBycomputer().then(data => {
        this.ResolveOverlongString(data);
    })
}

function OnclotheSelected(){
    productService.getProductsByclothe().then(data => {
        this.ResolveOverlongString(data);
    })
}

function OnSuppliesSelected(){
    productService.getProductsBySupplies().then(data => {
        this.ResolveOverlongString(data);
    })
}

function OndrinkSelected(){
    productService.getProductsBydrink().then(data => {
        this.ResolveOverlongString(data);
    })
}