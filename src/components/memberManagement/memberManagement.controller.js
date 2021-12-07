export default {
    setIndex,deleteProduct,addToPayArray,test,clickEdit
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
function test(num) {
    if (num === 1) {
        return '是';
    } else {
        return '否';
    }
}
function clickEdit(index, row) {
    console.log(index, row);
}