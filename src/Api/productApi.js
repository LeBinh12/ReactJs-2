import axiosClient from "./axiosClient";



const productsApi = {
    getAll(params) {
        const url = '/products';
        return axiosClient.get(url, {params});
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/product`;
        return axiosClient.get(url,data);
    },
    update(data) {
        const url = `/product/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id) { 
        const url = `/product/${id}`;
        return axiosClient.patch(url);
    },
};

export default productsApi;