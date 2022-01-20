import CartService from '../../services/cart.service'

export default {
    setIndex,
    deleteProduct,
    addToPayArray,
    handleChange,
    click
}

function setIndex(num) {
    this.deleteIndex = num;
    this.dialogVisible = true;
}
function deleteProduct() {
    CartService.deleteProductofCart(this.productArray[this.deleteIndex].ProductID);
    this.productArray.splice(this.deleteIndex, 1);
    this.dialogVisible = false;
}
function addToPayArray(val) {
    this.productOfChecked = val;
}
function handleChange(index,quantity){
    CartService.updateProductQuantity(this.productArray[index].ProductID, quantity);
    
}
function click(){
    this.$router.push({
        path: '/payment',
        query: {
            dataTable: JSON.stringify(this.productOfChecked)
        }
    });
}