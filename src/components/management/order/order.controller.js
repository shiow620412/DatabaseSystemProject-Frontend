import orderService from '../../../services/admin/order.service'
import { ElMessage } from 'element-plus'

export default {
    changePaymentChinese,
    changeStatusChinese,
    modifyOrder,
    clickSave,
    handleSizeChange,
    handleCurrentChange
}

function changePaymentChinese(num) {
    if (num === 1) {
        return '信用卡'
    } else if (num === 2) {
        return '貨到付款'
    }
}

function changeStatusChinese(num) {
    if (num === 1) {
        return '交易完成'
    } else if (num === 2) {
        return '交易取消'
    } else if (num === 3) {
        return '訂單成立'
    }
}

function modifyOrder(id, status) {
    orderService.modifyOrder(id, status).then((result) => {
        if (result.message === "訂單交易成功") {
            ElMessage.success("訂單狀態已改為成功");
        } else if (result.message === '訂單取消成功') {
            ElMessage.success("訂單狀態已改為取消");
        }
    }).catch((error) => {
        ElMessage.error(error.response.data.message);
    });
}

function clickSave(index, orderId, orderStatus) {
    
    let tempStatus = '';
    if (orderStatus === 1) {
        tempStatus = 'finish';
    } else if (orderStatus === 2) {
        tempStatus = 'cancel';
    }
    modifyOrder(orderId, tempStatus);
}

function handleSizeChange(size) {
    this.pageSize = size;
    
}

function handleCurrentChange(currentPage) {
    this.currentPage = currentPage;
    
    orderService.getOrders(this.currentPage).then(data => {
        this.orderArray = data;
    }).catch((error) => {
        this.$message.error(error.response.data.message);
    });
}