export default {
    checkButton,
    addProduct,
    editProduct,
    clickSave,
    checkPrice,
    checkStock
}

function checkButton(clickButton) {
    if (clickButton === 'add') {
        this.tabName = '新增商品';
    } else if (clickButton === 'edit') {
        this.tabName = '編輯商品';
    }
}

function addProduct() {
    this.productArray.push({
        productID: this.productArray.length,
        productName: '',
        photo: '',
        price: '',
        description: ''
    });
    this.index = this.productArray.length - 1;
}

function editProduct(num, item) {
    console.log(num);
    console.log(item);
    this.index = num;
}

function clickSave(num) {
    console.log(num)
}

function checkPrice(num) {
    if (num < 0) {
        this.operationProduct.price = 0
    }
}

function checkStock(num) {
    if (num < 0) {
        this.operationProduct.stock = 0
    }
}