export default {
    filterSelectEvent,
    filterClickEvent
}
function filterSelectEvent(){
    if(this.filterSelect.length > 1){
        this.filterSelect = this.filterSelect.slice(1)
    }
}

function filterClickEvent(){
    const filterObject = {}
    if(this.filterSelect.length > 0){
        Object.assign(filterObject, this.filter[this.filterSelect[0]]);
    }
    const minPrice = Number(this.minPrice);
    if(!Number.isNaN(minPrice) && minPrice > 0){
        Object.assign(filterObject, {minPrice})
    }
    const maxPrice = Number(this.maxPrice)
    if(!Number.isNaN(maxPrice) && maxPrice > 0){
        Object.assign(filterObject, {maxPrice})
    }
    if(this.$route.query.productName){
        Object.assign(filterObject, {productName :this.$route.query.productName});
    }
    this.$router.push({query: filterObject});
    this.$emit('filterProduct', filterObject);
}
