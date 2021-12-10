export default {
    setIndex,deleteProduct,addToPayArray,changeIsAdminChinese,clickEdit,changeStatusChinese
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
function changeIsAdminChinese(num) {
    if (num === 1) {
        return '是';
    } else {
        return '否';
    }
}
function changeStatusChinese(num) {
    if (num === 1) {
        return '確認中'
    } else if (num === 2) {
        return '訂單成立'
    } else if (num === 3) {
        return '訂單取消'
    }
}
function clickEdit(index, row) {
    console.log(index, row);
}