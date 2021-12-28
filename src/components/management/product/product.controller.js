import imageService from '../../../services/image.service'
// import productService from '../../../services/admin/product.service'
export default {
    checkButton,
    addProduct,
    editProduct,
    clickCancel,
    clickSave,
    clickPhoto,
    checkPrice,
    checkStock,
    handleAvatarSuccess,
    handleRemove,
    checkImg,
    handleExceed,
    handleImageAdded
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

function clickCancel(num) {
    console.log(num);
    this.previewImage = null;
}

function clickSave(num) {
    console.log(num);
}

function clickPhoto(num) {
    console.log(num)
}

function checkPrice(num) {
    if (num < 0) {
        this.operationProduct.price = 0;
    }
}

function checkStock(num) {
    if (num < 0) {
        this.operationProduct.stock = 0;
    }
}

function handleAvatarSuccess(res, file) {
    this.imageUrl = URL.createObjectURL(file.raw);
    this.productArray[this.index].photo = URL.createObjectURL(file.raw);
}

function handleRemove(file, fileList) {
    console.log(file, fileList);
    this.imageUrl = '';
    this.productArray[this.index].photo = '';
}

function checkImg() {
    if (this.productArray[this.index].photo !== '') {
        console.log('error')
    }
}

function handleExceed(files, fileList) {
    console.log(files, fileList);
    this.$message.warning (
        `只能夠上傳一張照片`
    )
}

function handleImageAdded(file, Editor, cursorLocation, resetUploader) {
    const formData = new FormData();
    formData.append("image", file);

    imageService.uploadImage(formData).then((result) => {
        const url = result.imageUrl;
        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
    });
}