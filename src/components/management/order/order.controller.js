export default {
    changeStatusChinese,clickSave
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
function clickSave(index) {
    console.log(index);
}
