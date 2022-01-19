import productService from '../../services/product.service'

export default {
    requestFilterProduct,
    RequestNewPage,
    watchCategory
}
function watchCategory(){
    
    if(this.categoryId !== 0){
        this.filterShow = true;
    }else{
        this.filterShow = false;
    }
    this.currentPage = 1;
    
    if(Object.keys(this.$route.query).length > 0){
        
        const expectQueryString = ["productName", "filter", "sort", "minPrice", "maxPrice"];
        const filterObj = {};
        expectQueryString.forEach(queryString => {
            if(this.$route.query[queryString]){
                filterObj[queryString] = this.$route.query[queryString];                        
            }
        });
    
        this.filterObj = filterObj;
        
        return;
    }else{
        this.filterObj = {}
        
    }               
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
