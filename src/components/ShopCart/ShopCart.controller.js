import ShopCartService from "../../services/shopcart.service"

export default {
    setDeleteID,
    deleteProduct,
    editProduct,
    saveProduct,
    cancelEdit,
    addToPayArray
}

function setDeleteID(productID) {
    this.proID = productID;
    console.log(this.proID);
    this.dialogVisible = true;
}

function deleteProduct(productID) {
    ShopCartService.deleteProduct(productID).then((result) => {
        this.$message.success(result.message);
        location.reload();
    }).catch((error) => {
        this.$message.error(error.response.data.message);
    });
    this.dialogVisible = false;
}

function editProduct(productID) {
    console.log(productID);
}

function saveProduct(productID, quantity) {
    console.log(productID);
    ShopCartService.modifyProductQuantity(productID, quantity).then((result) => {
        this.$message.success(result.message);
        // location.reload();
    }).catch((error) => {
        this.$message.error(error.response.data.message);
    });
}

function cancelEdit() {
    this.$message.success('取消編輯');
}

function addToPayArray(val) {
    this.productOfChecked = val;
}