import memberService from '../../../services/admin/user.service'

export default {
    changeIsAdminChinese,
    changeStatusChinese,
    changeUserStatus,
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
    if (num === 0) {
        return '正常'
    } else {
        return '停權'
    }
}

function changeUserStatus(id, status) {
    memberService.modifyUser(id, status)
    // .then(data => {

    // }).catch((error) => {
    //     alert(error.response.data.message)
    // })
}

function clickSave(index, userId, status) {
    console.log(index);
    console.log(userId);
    console.log(status);
    let tempStatus = '';
    if (status === 0) {
        tempStatus = 'unban';
    } else {
        tempStatus = 'ban';
    }
    changeUserStatus(userId, tempStatus);
}