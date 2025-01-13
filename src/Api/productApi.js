import axiosClient from './axiosClient';
import productTest from '../product.json'
const productsApi = {
  async getAll(params) {
        const url = '/products';
        return axiosClient.get(url);
  },
  getProductTest() {
    const url = productTest;
    return url;
  },
  addProductTest() {
    const url = productTest;
    return url;
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
  search(params) {
    const url = '/products/search';
    return axiosClient.get(url, { params });
  }
};

export default productsApi;
