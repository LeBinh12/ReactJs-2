import axiosClient from './axiosClient';

const productsApi = {
  async getAll(params) {
        const url = '/products';
        return axiosClient.get(url);
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/product`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/product/${data.id}`;
    return axiosClient.post(url, data);
  },
  remove(id) {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
};

export default productsApi;
