export default {
    changeCategory,
    changeSearchCategory,
    changeActiveCategory
}

function changeActiveCategory(category, categoryId){
    category.map(element => {
        if(element.id === categoryId){
            element.isActive = true;
        }else{
            element.isActive = false;
        }
        return element;
    });
}

function changeCategory(categoryId){
    changeActiveCategory(this.category, categoryId);
    this.eventBus.emit("changeCategory", categoryId);
}

function changeSearchCategory(categoryId, productName){
    changeActiveCategory(this.category, categoryId);
    const searchObject = {
        categoryId,
        productName
    }
    this.eventBus.emit("changeSearchCategory" ,searchObject)
}