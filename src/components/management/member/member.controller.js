export default {
    setIndex,deleteProduct,addToPayArray,checkIsAdmin,clickEdit,changeStatusChinese
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
function checkIsAdmin(num) {
    if (num === 1) {
        return '是';
    } else {
        return '否';
    }
}
function clickEdit(index, row) {
    console.log(index, row);
}
function changeStatusChinese(num) {
    if (num === 1) {
        return '正常'
    } else {
        return '停權'
    }
}