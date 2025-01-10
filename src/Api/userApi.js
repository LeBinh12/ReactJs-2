import axiosClient from "./axiosClient";



const userApi = {
    register(data) {
        const url = `/user`;
        return axiosClient.post(url,data);
    },
};

export default userApi;