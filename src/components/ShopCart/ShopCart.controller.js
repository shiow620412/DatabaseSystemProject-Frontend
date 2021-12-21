export default {
    setIndex,deleteProduct,addToPayArray,test
}

function setIndex(num) {
    this.deleteIndex = num;
}
function deleteProduct() {
    this.productArray.splice(this.deleteIndex, 1);
    this.dialogVisible = false;
}
function addToPayArray(val) {999
    this.productOfChecked = val;
}
function test() {
    console.log(this.productOfChecked);
}