export default {
    changeCategory,
    changeSearchCategory
}


function changeCategory(categoryId){
    this.category.map(element => {
        if(element.id === categoryId){
            element.isActive = true;
        }else{
            element.isActive = false;
        }
        return element;
    });
    this.eventBus.emit("changeCategory", categoryId);
}

function changeSearchCategory(categoryId, productName){
    this.category.map(element => {
        if(element.id === categoryId){
            element.isActive = true;
        }else{
            element.isActive = false;
        }
        return element;
    });
    const searchObject = {
        categoryId,
        productName
    }
    this.eventBus.emit("changeSearchCategory" ,searchObject)
}