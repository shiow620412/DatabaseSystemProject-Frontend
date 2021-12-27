import http from "./service.config"

const prefix = "/user";
const services = {
    login,
    register,
    findPassword,
    getInformation,
    EditInformation,
    getCreditCard,
    DeleteCreditCard,
    AddCreditCard,
    ChangePassword
}
function login(account, password){
    const url = prefix + "/login";

    return http.post(url, {
        account,
        password
    });
}
function register(email, account, password, name){
    const url = prefix + "/register";

    return http.post(url, {
        email,
        account,
        password,
        name
    });
}
function findPassword(email){
    const url = prefix + "/findPassword";

    return http.get(url, {
        email
    });
}
function getInformation(){
    const url = prefix + "/information";

    return http.get(url);
}
function EditInformation(email, name, address, phone){
    const url = prefix + "/information";

    return http.put(url,{
        email,
        name,
        address,
        phone
    });
}
function getCreditCard(){
    const url = prefix + "/creditCard";

    return http.get(url);
}
function DeleteCreditCard(cardNumber){
    const url = prefix + "/creditCard";

    return http.delete(url,{
        data: {
            "cardNumber": cardNumber
        }
    })
}
function AddCreditCard(cardNumber, securityCode, year, month){
    const url = prefix + "/creditCard";

    return http.post(url, {
        cardNumber,
        securityCode,
        year,
        month
    });
}
function ChangePassword(oldPassword, newPassword){
    const url = prefix + "/password";

    return http.put(url, {
        oldPassword,
        newPassword
    });
}

export default services;