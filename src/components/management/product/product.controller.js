export default {
    clickSave,checkPrice,checkStock
}

function clickSave(index) {
    console.log(index);
}

function checkPrice(num) {
    if (num < 0) {
        this.product.price = 0
    }
}

function checkStock(num) {
    if (num < 0) {
        this.product.stock = 0
    }
}
// var openFile = function (event) {
//     var input = event.target;
//     var reader = new FileReader();
//     reader.onload = function() {
//         if (reader.result) {
//             $("#output").html(reader.result);
//         }
//     };
//     reader.readAsText(input.file[0]);
// };