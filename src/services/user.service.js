import http from "./service.config"

const prefix = "/user";
const services = {
    login
}
function login(account, password){
    const url = prefix + "/login";

    return http.post(url, {
        account,
        password
    });
}


export default services;