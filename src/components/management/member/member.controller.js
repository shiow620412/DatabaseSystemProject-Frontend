export default {
    changeIsAdminChinese,changeStatusChinese,clickEdit
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
        return '正常'
    } else {
        return '停權'
    }
}
function clickEdit(index, row) {
    console.log(index, row);
}