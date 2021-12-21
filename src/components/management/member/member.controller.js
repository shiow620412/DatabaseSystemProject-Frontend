// import memberService from '../../../services/admin/user.service'

export default {
    changeIsAdminChinese,
    changeStatusChinese,
    clickSave
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

function clickSave(index) {
    console.log(index);
}