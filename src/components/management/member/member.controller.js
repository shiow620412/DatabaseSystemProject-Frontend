import memberService from '../../../services/admin/user.service'
import { ElMessage } from 'element-plus'

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
    
    changeUserStatus(userId, isAdminStatus, isBanStatus);
}

function handleSizeChange(size) {
    this.pageSize = size;
    
}

function handleCurrentChange(currentPage) {
    this.currentPage = currentPage;
    
    memberService.getMembers(this.currentPage).then(data => {
        this.memberArray = data;
    }).catch((error) => {
        ElMessage.error(error.response.data.message);
    });
}