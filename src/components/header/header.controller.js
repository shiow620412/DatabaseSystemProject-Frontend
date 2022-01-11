export default {
    search,
    checkLogin,
    goHome
}
function search(){
    this.eventBus.emit("searchEvent", this.searchInput);
    this.$router.push({
        path: "/",
        query: {
            productName: this.searchInput
        }
    });
}
function checkLogin(){
    if(localStorage.getItem("token")){this.$router.push({path: "/member"});}
    else{this.$router.push({path: "/user"});}
}
function goHome(){
    this.searchInput = '';
    this.eventBus.emit("recoverCategory");
    this.eventBus.emit("changeCategory", 0);
}