import adminProductService from '../../../services/admin/product.service'
import productService from '../../../services/product.service'
import imageService from '../../../services/admin/image.service'
import { ElMessage } from 'element-plus'

export default {
    changeChinese,
    checkButton,
    addProduct,
    editProduct,
    setPID,
    changeProductStatus,
    clickCancel,
    clickSave,
    checkPrice,
    checkStock,
    beforeAvatarUpload,
    handleChange,
    handleImageAdded,
    handleSizeChange,
    handleCurrentChange,
    newurl
}

function changeChinese(text) {
    if (text === 'Yes') {
        return '是';
    } else {
        return '否';
    }
}

function checkButton(clickButton) {
    if (clickButton === 'add') {
        this.tabName = '新增商品';
    } else if (clickButton === 'edit') {
        this.tabName = '編輯商品';
    }
}

function addProduct() {
    this.proID = 0;
    this.loaded = true;
    this.$router.push("/management/product/" + this.proID);
}

function editProduct(productID) {
    this.loaded = false;
    this.proID = productID;
    productService.getProductDetail(this.proID).then(data => {
        this.operationProduct = data;
        this.loaded = true;
        this.$router.push("/management/product/" + productID);
    })
}

function setPID(productID) {
    this.proID = productID;
}

function changeProductStatus(productID, status) {
    adminProductService.changeProductStatus(productID, status).then((result) => {
        ElMessage({message: result.message, type: 'success'});
        location.reload();
    });
    this.deleteDialogVisible = false;
    this.onSelfDialogVisible = false;
}

function clickCancel() {
    this.operationProduct = [];
    this.$router.push("/management/product");
    if (this.tabName === '新增商品') {
        ElMessage.success('取消新增商品');
    } else if (this.tabName === '編輯商品') {
        ElMessage.success('取消編輯商品');
    }
}

function clickSave(productID) {
    let temp = this.operationProduct;
    if (this.tabName === '編輯商品') {
        adminProductService.modifyProduct(productID, temp.Price, temp.Thumbnail, temp.Description, temp.Stock).then((result) => {
            ElMessage.success(result.message);
            // location.reload();
        }).catch((error) => {
            ElMessage.error(error.response.data.message);
        });
    } else if (this.tabName === '新增商品') {
        adminProductService.addProduct(temp.ProductName, temp.Price, temp.Thumbnail, temp.Description, temp.Type, temp.Stock).then((result) => {
            ElMessage.success(result.message);
            // location.reload();
        }).catch((error) => {
            ElMessage.error(error.response.data.message);
        });
    }
    const findProduct = this.productArray.result.find(product => product.productID === this.operationProduct.productID)
    if(findProduct){
        Object.keys(this.operationProduct).forEach(key => {
            findProduct[key] = this.operationProduct[key];
        });
        
    }
    this.$router.push("/management/product");
    this.operationProduct = [];
}

function checkPrice(num) {
    if (num < 0) {
        this.operationProduct.Price = 0;
        ElMessage.error('價格不可以低於0');
    }
}

function checkStock(num) {
    if (num < 0) {
        this.operationProduct.Stock = 0;
        ElMessage.error('庫存不可以低於0');
    }
}

function beforeAvatarUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';
    if (!isJPG && !isPNG) {
        ElMessage.error('只能上傳 JPG 或 PNG 格式的圖片!');
        return (isJPG || isPNG);
    } else {
        const formData = new FormData();
        formData.append("image", file);
        imageService.uploadImage(formData).then((result) => {
            const url = result.imageUrl;
            this.operationProduct.Thumbnail = url.replace(this.imgURL, "");
            ElMessage.success(result.message);
            
        });
    }
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
        ElMessage.success("照片" + result.message);
    }).catch((error) => {
        ElMessage.error(error.response.data.message);
    });
}

function handleSizeChange(size) {
    this.pageSize = size;
}

function handleCurrentChange(currentPage) {
    this.currentPage = currentPage;
    adminProductService.getProducts(this.currentPage).then(data => {
        this.productArray = data;
    }).catch((error) => {
        ElMessage.error(error.response.data.message);
    });
}

function newurl(myurl){
    myurl = location.href;  var times = myurl.split("?");   if(times[1] != 1){   myurl += "?1";
        self.location.replace(myurl);
        history.go(0);
    }
}