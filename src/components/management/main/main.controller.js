export default {
    getOrderNum,orderNumber
}
function getOrderNum() {
    let OrderArr = [];
    for (let i = 0; i < this.orderArray.length; i++) {
        OrderArr.push(parseInt(this.orderArray[i].Total));
    }
    return OrderArr;
}

function orderNumber() {
    const oNum = {
        type: "doughnut",
        data: {
            labels: ["交易完成", "交易取消", "確認中"],
            datasets: [{
                backgroundColor: ["rgb(255,0,0)", "rgb(255,140,0)", "rgb(255,255,0)"],
                data: this.getOrderNum
            }, ],
        },
    };
    return oNum;
}