import http from "../service.config"

const prefix = "/admin/img";
const services = {
    uploadImage
}

function uploadImage(formData) {
    const url = prefix + "/upload";

    return http.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export default services;