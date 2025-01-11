import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'Api/userApi';
import StorageKeys from 'constants/storage-keys';

export const  register = createAsyncThunk(
    'users/register',
    async (payLoad) => {
        // call API
        const data = await userApi.register(payLoad);
        localStorage.setItem(StorageKeys.DATA, JSON.stringify(data));


        return data;
    },
)
  
export const  login = createAsyncThunk(
  'users/login',
  async (payLoad) => {
      // call API
      const data = await userApi.login(payLoad);
      localStorage.setItem(StorageKeys.DATA, JSON.stringify(data));


      return data;
  },
)
  

const userSlice = createSlice({
  name: 'user',
    initialState: {
        current: {},
        settings: {},
  },
  reducers: {

    },
  
   extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload; // Sử dụng "action.payload" đúng
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload; // Sử dụng "action.payload" đúng
    });
  },
});

const {  reducer } = userSlice;

export default reducer;
