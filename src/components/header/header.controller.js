export default {
    search,
    logout,
    goHome
}
import {ElMessage} from 'element-plus';
function search(){
    this.$router.push({
        path: "/",
        query: {
            productName: this.searchInput
        }
    });
    this.eventBus.emit("searchEvent", this.searchInput);
}

function goHome(){
    this.searchInput = '';
    this.eventBus.emit("recoverCategory");
    this.eventBus.emit("changeCategory", 0);
}

function logout(){
    this.userOptions = [
        {
             label: "登入",
             path: "/user/login",
             display: true
         },
         {
             label: "註冊",
             path: "/user/register",
             display: true
         }
     ]
    this.memberInformation = {};
    localStorage.removeItem("token")
    ElMessage({
        message: '成功登出',
        type: 'success',
      })
}