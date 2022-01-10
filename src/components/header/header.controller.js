export default {
    search,
    checkLogin,
    goHome
}
function search(){
    this.eventBus.emit("click-send-msg", this.input);
    this.$router.push({
        path: "/index",
        query: {
            q: this.input
        }
    });
}
function checkLogin(){
    if(localStorage.getItem("token")){this.$router.push({path: "/member"});}
    else{this.$router.push({path: "/user"});}
}
function goHome(){
    this.eventBus.emit("notifyReload", "0");
}