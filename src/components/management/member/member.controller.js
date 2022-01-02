import memberService from '../../../services/admin/user.service'

export default {
    changeIsAdminChinese,
    changeStatusChinese,
    changeUserStatus,
    clickSave,
    handleSizeChange,
    handleCurrentChange
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

function changeUserStatus(id, isAdminStatus, isBanStatus) {
    memberService.modifyUser(id, isAdminStatus, isBanStatus);
}

function clickSave(index, userId, isAdminStatus, isBanStatus) {
    console.log(index);
    changeUserStatus(userId, isAdminStatus, isBanStatus);
}

function handleSizeChange(size) {
    this.pageSize = size;
    console.log(this.pageSize);
}

function handleCurrentChange(currentPage) {
    this.currentPage = currentPage;
    console.log(this.currentPage);
    memberService.getMembers(this.currentPage).then(data => {
        this.memberArray = data;
    }).catch((error) => {
        this.$message.error(error.response.data.message);
    });
}