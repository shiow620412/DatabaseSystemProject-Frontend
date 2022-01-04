import CartService from '../../services/cart.service'

export default {
    setIndex,
    deleteProduct,
    addToPayArray,
    handleChange
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
    console.log(index, quantity);
}