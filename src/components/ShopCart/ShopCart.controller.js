export default {
    setIndex,deleteProduct,addToPayArray
}

function setIndex(num) {
    this.deleteIndex = num;
}
function deleteProduct() {
    this.productArray.splice(this.deleteIndex, 1);
    this.dialogVisible = false;
}
function addToPayArray(val) {
    this.productOfChecked = val;
}