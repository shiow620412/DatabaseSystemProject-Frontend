import loginService from '../../../services/user.service'

export default {
    login,
}

function login(account, password){
    loginService.login(account, password).then(data =>{
        localStorage.setItem("token", data.token);
        this.$router.push({path: "/index"});
    }).catch((error) => {
        alert(error.response.data.message);
    })
}