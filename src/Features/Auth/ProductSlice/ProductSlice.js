import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsApi from 'Api/productApi';
import StorageKeys from 'constants/storage-keys';

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (payLoad) => {
        // call API
        const data = await productsApi.add(payLoad);
        localStorage.setItem(StorageKeys.DATA, JSON.stringify(data))
        return data;
  },
)

export const updateProduct = createAsyncThunk(
'product/updateProduct',
async (payLoad) => {
  // call API
  const data = await productsApi.update(payLoad);
  localStorage.setItem(StorageKeys.DATA, JSON.stringify(data))
  return data;
}
)


  

const productSlice = createSlice({
  name: 'product',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.DATA)) || {},
        settings: {},
  },
  reducers: {
    logout(state) { 
      // clear local storage
      localStorage.removeItem(StorageKeys.DATA);
      state.current = {}
    }
    },
  
   extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.current = action.payload; // Sử dụng "action.payload" đúng
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.current = action.payload; // Sử dụng "action.payload" đúng
    });
  },
});

const { actions , reducer } = productSlice;
export const { logout } = actions;
export default reducer;
