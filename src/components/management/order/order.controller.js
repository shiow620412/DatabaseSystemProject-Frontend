import orderService from '../../../services/admin/order.service'

export default {
    changePaymentChinese,
    changeStatusChinese,
    modifyOrder,
    clickSave
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
    orderService.modifyOrder(id, status);
}

function clickSave(index, orderId, orderStatus) {
    console.log(index);
    let tempStatus = '';
    if (orderStatus === 1) {
        tempStatus = 'finish';
    } else if(orderStatus === 2) {
        tempStatus = 'cancel';
    }
    modifyOrder(orderId, tempStatus);
}