import productService from '../../services/product.service'

export default {
    requestFilterProduct,
    RequestNewPage
}


function requestFilterProduct(filterObj){
    this.filterObj = filterObj;
}

function RequestNewPage(){
    
    this.currentPage++;
    if(this.currentPage <= this.maxPage){
        //const query = Object.entries(this.$route.query);
        if(this.filterObj.productName){
            if(this.categoryId){
                productService.searchAllProductByName(this.categoryId, this.currentPage, this.filterObj).then(data => {
                    data.result.forEach(element => {
                        this.productData.push(element);
                    });
                })
            }else{
                productService.searchAllProductByName(this.currentPage, this.filterObj).then(data => {
                    data.result.forEach(element => {
                        this.productData.push(element);
                    });
                })
            }
        }else{
            if(this.categoryId){
                productService.getProductsByCategory(this.categoryId,this.currentPage,this.filterObj).then(data => {
                    data.result.forEach(element => {
                        this.productData.push(element);
                    });
                    
                })
            }else{
                productService.getProducts(this.currentPage, this.filterObj).then(data => {
                    data.result.forEach(element => {
                        this.productData.push(element);
                    });
                })
            }
        }
    
        
    
    }
}
