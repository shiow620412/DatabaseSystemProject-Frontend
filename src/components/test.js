export {methods};

let methods = {
    ClickDelete,ClickDown,ClickUp,CheckInventory
};

function ClickDown(num) {    
    // alert("減少數量");
    if (this.commoditys[num].Cnum == 1) {
        if (confirm("確定要將此商品從購物車中移除?")) {
            this.commoditys.splice(num, 1)
        }
    } else if (this.commoditys[num].Cnum > 1) {
        this.commoditys[num].Cnum--
    }
}
function ClickUp(num, maxCt) {
    // alert("增加數量")
    if (this.commoditys[num].Cnum < maxCt) {
        this.commoditys[num].Cnum++
    } else {
        alert('此商品的數量只剩下 ' + maxCt + ' 個!')
    }
}
function ClickDelete(num) {
    if (confirm("確定要將此商品從購物車中移除?")) {
        this.commoditys.splice(num, 1)
    }
}
function CheckInventory(num, cyNum, maxCt) {
    if (cyNum > maxCt) {
        alert('此商品的數量只剩下 ' + maxCt + ' 個!')
        this.commoditys[num].Cnum = maxCt
    } else if (cyNum == "" || cyNum == 0) {
        this.ClickDelete(num)
    }
}

