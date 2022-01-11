export default {
    changeCategory,
    changeSearchCategory
}


function changeCategory(categoryId){
    this.eventBus.emit("changeCategory", categoryId);
}

function changeSearchCategory(categoryId, productName){
    const searchObject = {
        categoryId,
        productName
    }
    this.eventBus.emit("changeSearchCategory" ,searchObject)
}