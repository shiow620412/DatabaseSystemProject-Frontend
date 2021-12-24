import http from "./service.config"

const prefix = "/user";
const services = {
    login,
    getInformation,
    EditInformation,
    getCreditCard,
    DeleteCreditCard,
    AddCreditCard
}
function login(account, password){
    const url = prefix + "/login";

    return http.post(url, {
        account,
        password
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

export default services;