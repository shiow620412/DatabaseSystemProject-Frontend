import imageService from '../../../services/admin/image.service'

export default {
    checkButton,
    addProduct,
    editProduct,
    deleteProduct,
    clickCancel,
    clickSave,
    clickPhoto,
    checkPrice,
    checkStock,
    handleAvatarSuccess,
    handleRemove,
    checkImg,
    handleExceed,
    handleImageAdded,
    getImg,
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

function editProduct(index, item) {
    console.log(index);
    console.log(item);
    this.index = index;
}

function deleteProduct(index, id) {
    console.log(index);
    console.log(id);
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

function getImg(fileName) {
    const imgURL = "http://103.195.4.81:3000/img/" + fileName
    return imgURL;
}