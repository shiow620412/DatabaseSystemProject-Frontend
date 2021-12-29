import adminProductService from '../../../services/admin/product.service'
import productService from '../../../services/product.service'
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
    beforeAvatarUpload,
    handleBannerError,
    handleChange,
    handleImageAdded,
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

function editProduct(index, item, productID) {
    console.log(index);
    console.log(item);
    this.index = index;
    this.proID = productID;
    productService.getProductdetail(this.proID).then(data => {
        this.operationProduct = data;
    })
}

function deleteProduct(index, id) {
    console.log(index);
    console.log(id);
}

function clickCancel(num) {
    console.log(num);
    this.previewImage = null;
}

function clickSave(productID) {
    console.log(productID);
    let temp = this.operationProduct;
    adminProductService.modifyProduct(productID, temp.Price, temp.Thumbnail, temp.Description, temp.Stock)
    this.operationProduct.length = 0;
}

function clickPhoto(num) {
    console.log(num)
}

function checkPrice(num) {
    if (num < 0) {
        this.operationProduct.Price = 0;
    }
}

function checkStock(num) {
    if (num < 0) {
        this.operationProduct.Stock = 0;
    }
}

function handleAvatarSuccess(res, file) {
    let imageUrl = URL.createObjectURL(file.raw)
    console.log(imageUrl);
    this.$message.success('上傳成功')
}

function beforeAvatarUpload(file) {
    // const isJPG = fileList.type === 'image/jpeg' || fileList.type === 'image/png'
    // const isLt2M = fileList.size / 1024 / 1024 < 2

    // if (!isJPG) {
    //     this.$message.error('Avatar picture must be jpg/jpeg/png format!')
    // }
    // if (!isLt2M) {
    //     this.$message.error('Avatar picture size can not exceed 2MB!')
    // }
    // if (isJPG && isLt2M) {
    //     const formData = new FormData();
    //     formData.append("image", fileList);
    //     imageService.uploadImage(formData).then((result) => {
    //         const url = result.imageUrl;
    //         this.operationProduct.Thumbnail = url;
    //         console.log(url);
    //     });
    // } else {
    //     return isJPG && isLt2M;
    // }
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';
    if (!isJPG && !isPNG) {
        this.$message.error('只能上傳 JPG 或 PNG 格式的圖片!');
        return (isJPG || isPNG);
    } else {
        const formData = new FormData();
        formData.append("image", file);
        imageService.uploadImage(formData).then((result) => {
            const url = result.imageUrl;
            this.operationProduct.Thumbnail = url;
            console.log(url);
        });
    }
}

function handleBannerError() {
    this.$message.error('上傳失敗');
}

function handleChange(file, fileList) {
    if (fileList.length > 1) {
        fileList.splice(0, 1)
    }
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

// function getImg(fileName) {
//     const imgURL = "http://103.195.4.81:3000/img/" + fileName
//     return imgURL;
// }